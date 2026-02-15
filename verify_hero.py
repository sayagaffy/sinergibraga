from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to homepage
        print("Navigating to homepage...")
        try:
            response = page.goto("http://localhost:3000", timeout=60000)
        except Exception as e:
            print(f"Navigation failed: {e}")
            browser.close()
            return

        if not response or not response.ok:
            print(f"Failed to load page: {response.status if response else 'No response'}")
            browser.close()
            return

        print("Page loaded.")

        # Wait for Hero section
        try:
            page.wait_for_selector('h1', timeout=10000)
        except Exception as e:
            print(f"Timeout waiting for h1: {e}")
            browser.close()
            return

        # Check if the stray text is gone
        print("Checking for stray text...")
        stray_text = page.get_by_text('id="trust-icon-1"')
        if stray_text.count() > 0 and stray_text.is_visible():
             print("FAILURE: Stray text 'id=\"trust-icon-1\"' found!")
        else:
             print("SUCCESS: Stray text NOT found.")

        # Check image sizes attribute
        print("Checking image sizes attribute...")
        # The image in Hero section. It has alt="Modern Architecture and Nature"
        img = page.get_by_alt_text("Modern Architecture and Nature")

        # Wait for image to be attached
        try:
            img.wait_for(state="attached", timeout=5000)
        except:
            print("Image not found or not attached.")

        if img.count() > 0:
            sizes = img.get_attribute("sizes")
            print(f"Image sizes attribute: {sizes}")
            if sizes == "(max-width: 1023px) 1px, 50vw":
                print("SUCCESS: Image sizes attribute is correct.")
            else:
                print(f"FAILURE: Image sizes attribute is incorrect. Expected '(max-width: 1023px) 1px, 50vw', got '{sizes}'")
        else:
             print("FAILURE: Hero image not found.")

        # Take screenshot
        print("Taking screenshot...")
        page.screenshot(path="verification_hero.png", full_page=True)
        print("Screenshot saved to verification_hero.png")

        browser.close()

if __name__ == "__main__":
    run()

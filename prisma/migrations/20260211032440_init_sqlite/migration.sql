-- CreateTable
CREATE TABLE "Expert" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "expertQuote" TEXT NOT NULL,
    "photoUrl" TEXT,
    "linkedinUrl" TEXT,
    "credentials" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "Citation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sourceTitle" TEXT NOT NULL,
    "sourceUrl" TEXT,
    "contextClause" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "Service" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "features" TEXT NOT NULL,
    "geoFacts" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "statistics" TEXT,
    "expertId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "Service_expertId_fkey" FOREIGN KEY ("expertId") REFERENCES "Expert" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PortfolioItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "client" TEXT,
    "year" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "location" TEXT,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT,
    "challenge" TEXT,
    "solution" TEXT,
    "result" TEXT,
    "expertId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "PortfolioItem_expertId_fkey" FOREIGN KEY ("expertId") REFERENCES "Expert" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "FAQ" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "serviceId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "FAQ_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "GlossaryTerm" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "term" TEXT NOT NULL,
    "definition" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "Testimonial" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "role" TEXT,
    "company" TEXT,
    "content" TEXT NOT NULL,
    "rating" INTEGER NOT NULL DEFAULT 5,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "ContactSubmission" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "_CitationToService" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_CitationToService_A_fkey" FOREIGN KEY ("A") REFERENCES "Citation" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CitationToService_B_fkey" FOREIGN KEY ("B") REFERENCES "Service" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_CitationToPortfolioItem" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_CitationToPortfolioItem_A_fkey" FOREIGN KEY ("A") REFERENCES "Citation" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CitationToPortfolioItem_B_fkey" FOREIGN KEY ("B") REFERENCES "PortfolioItem" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_GlossaryTermToService" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_GlossaryTermToService_A_fkey" FOREIGN KEY ("A") REFERENCES "GlossaryTerm" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_GlossaryTermToService_B_fkey" FOREIGN KEY ("B") REFERENCES "Service" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Service_slug_key" ON "Service"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "PortfolioItem_slug_key" ON "PortfolioItem"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "GlossaryTerm_term_key" ON "GlossaryTerm"("term");

-- CreateIndex
CREATE UNIQUE INDEX "_CitationToService_AB_unique" ON "_CitationToService"("A", "B");

-- CreateIndex
CREATE INDEX "_CitationToService_B_index" ON "_CitationToService"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CitationToPortfolioItem_AB_unique" ON "_CitationToPortfolioItem"("A", "B");

-- CreateIndex
CREATE INDEX "_CitationToPortfolioItem_B_index" ON "_CitationToPortfolioItem"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_GlossaryTermToService_AB_unique" ON "_GlossaryTermToService"("A", "B");

-- CreateIndex
CREATE INDEX "_GlossaryTermToService_B_index" ON "_GlossaryTermToService"("B");

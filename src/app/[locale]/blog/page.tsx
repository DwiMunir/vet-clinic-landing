'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import {
	BlogHero,
	BlogCategoryFilter,
	BlogGrid,
	NewsletterSection,
	BLOG_POSTS,
	BLOG_CATEGORIES,
	useBlogFilter,
} from '@/features/blog';

export default function BlogPage() {
	const t = useTranslations('blog');

	const {
		searchQuery,
		setSearchQuery,
		selectedCategory,
		setSelectedCategory,
		filteredPosts,
	} = useBlogFilter(BLOG_POSTS);

	return (
		<>
			<Header />
			<main className="min-h-screen">
				{/* Hero Section */}
				<BlogHero searchQuery={searchQuery} onSearchChange={setSearchQuery} />

				{/* Categories Filter */}
				<Section className="bg-white py-8 border-b">
					<Container>
						<BlogCategoryFilter
							categories={BLOG_CATEGORIES}
							selectedCategory={selectedCategory}
							onCategoryChange={setSelectedCategory}
						/>
					</Container>
				</Section>

				{/* Blog Grid */}
				<Section className="bg-gray-50">
					<Container>
						<BlogGrid posts={filteredPosts} />

						{/* Load More */}
						{filteredPosts.length > 0 && (
							<motion.div
								className="text-center mt-12"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.5 }}
							>
								<Button size="lg" variant="outline" className="rounded-full">
									{t('loadMore')}
								</Button>
							</motion.div>
						)}
					</Container>
				</Section>

				{/* Newsletter CTA */}
				<NewsletterSection />
			</main>
			<Footer />
		</>
	);
}

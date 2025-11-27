'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import {
	BlogDetailHeader,
	ShareButtons,
	BlogContent,
	AuthorBio,
	RelatedPosts,
	BLOG_POSTS_DATA,
	useBlogInteractions,
} from '@/features/blog';

export default function BlogDetailPage() {
	const params = useParams();
	const slug = params.slug as string;

	const {
		isLiked,
		isBookmarked,
		toggleLike,
		toggleBookmark,
		handleShare,
	} = useBlogInteractions();

	const postData = BLOG_POSTS_DATA[slug];

	if (!postData) {
		return (
			<>
				<Header />
				<main className="min-h-screen flex items-center justify-center">
					<div className="text-center">
						<h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
						<Link href="/blog">
							<Button>Back to Blog</Button>
						</Link>
					</div>
				</main>
				<Footer />
			</>
		);
	}

	return (
		<>
			<Header />
			<main className="min-h-screen bg-white">
				{/* Hero Section */}
				<Section className="pt-24 pb-8 bg-gray-50">
					<Container>
						<BlogDetailHeader slug={slug} postData={postData} />

						{/* Action Buttons */}
						<ShareButtons
							isLiked={isLiked}
							isBookmarked={isBookmarked}
							onToggleLike={toggleLike}
							onToggleBookmark={toggleBookmark}
							onShare={handleShare}
						/>
					</Container>
				</Section>

				{/* Featured Image */}
				<Section className="py-0">
					<Container>
						<motion.div
							className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden"
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.6, delay: 0.2 }}
						>
							<Image
								src={postData.image}
								alt={slug}
								fill
								className="object-cover"
								priority
							/>
						</motion.div>
					</Container>
				</Section>

				{/* Article Content */}
				<Section>
					<Container>
						<div className="max-w-3xl mx-auto">
							<BlogContent slug={slug} />

							{/* Author Bio */}
							<AuthorBio
								author={postData.author}
								authorAvatar={postData.authorAvatar}
							/>
						</div>
					</Container>
				</Section>

				{/* Related Posts */}
				<Section className="bg-gray-50">
					<Container>
						<RelatedPosts relatedSlugs={postData.relatedPosts} />
					</Container>
				</Section>
			</main>
			<Footer />
		</>
	);
}

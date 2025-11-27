'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';
import { Calendar, Clock, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin, Heart, BookmarkPlus } from 'lucide-react';

// Mock blog data - akan di-replace dengan real data dari CMS/API
const BLOG_POSTS_DATA: Record<string, {
  image: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorAvatar: string;
  relatedPosts: string[];
}> = {
  'cat-nutrition-guide': {
    image: 'https://images.unsplash.com/photo-1548681528-6a5c45b66b42?w=1200&q=80',
    category: 'nutrition',
    date: '2024-11-15',
    readTime: '5',
    author: 'Dr. Sarah Johnson',
    authorAvatar: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&q=80',
    relatedPosts: ['common-cat-diseases', 'kitten-care-basics'],
  },
  'common-cat-diseases': {
    image: 'https://images.unsplash.com/photo-1573865526739-10c1dd7aa8a7?w=1200&q=80',
    category: 'health',
    date: '2024-11-10',
    readTime: '7',
    author: 'Dr. Mike Chen',
    authorAvatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&q=80',
    relatedPosts: ['cat-nutrition-guide', 'senior-cat-health'],
  },
  'grooming-tips': {
    image: 'https://images.unsplash.com/photo-1501820488136-72669149e0d4?w=1200&q=80',
    category: 'grooming',
    date: '2024-11-05',
    readTime: '4',
    author: 'Jessica Lee',
    authorAvatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&q=80',
    relatedPosts: ['cat-behavior-understanding', 'kitten-care-basics'],
  },
  'cat-behavior-understanding': {
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=1200&q=80',
    category: 'behavior',
    date: '2024-10-28',
    readTime: '6',
    author: 'Dr. Emily Roberts',
    authorAvatar: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&q=80',
    relatedPosts: ['grooming-tips', 'kitten-care-basics'],
  },
  'kitten-care-basics': {
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=1200&q=80',
    category: 'care',
    date: '2024-10-20',
    readTime: '8',
    author: 'Dr. Sarah Johnson',
    authorAvatar: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&q=80',
    relatedPosts: ['cat-nutrition-guide', 'common-cat-diseases'],
  },
  'senior-cat-health': {
    image: 'https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?w=1200&q=80',
    category: 'health',
    date: '2024-10-15',
    readTime: '6',
    author: 'Dr. Mike Chen',
    authorAvatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&q=80',
    relatedPosts: ['common-cat-diseases', 'cat-nutrition-guide'],
  },
};

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const t = useTranslations('blogDetail');
  const tBlog = useTranslations('blog');
  const [isLiked, setIsLiked] = React.useState(false);
  const [isBookmarked, setIsBookmarked] = React.useState(false);

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

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = t(`${slug}.title`);

    const shareUrls: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <Section className="pt-24 pb-8 bg-gray-50">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Back Button */}
              <Link href="/blog" className="inline-flex items-center gap-2 text-gray-600 hover:text-secondary mb-8 transition-colors">
                <ArrowLeft size={20} />
                <span>{t('backToBlog')}</span>
              </Link>

              {/* Category Badge */}
              <div className="mb-4">
                <span className="bg-secondary text-white text-sm font-semibold px-4 py-2 rounded-full">
                  {tBlog(`categories.${postData.category}`)}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {t(`${slug}.title`)}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative">
                    <Image
                      src={postData.authorAvatar}
                      alt={postData.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{postData.author}</p>
                    <p className="text-sm text-gray-500">{t('author')}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>{new Date(postData.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  <span>{postData.readTime} {tBlog('minRead')}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2"
                  onClick={() => setIsLiked(!isLiked)}
                >
                  <Heart size={18} className={isLiked ? 'fill-red-500 text-red-500' : ''} />
                  {t('like')}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2"
                  onClick={() => setIsBookmarked(!isBookmarked)}
                >
                  <BookmarkPlus size={18} className={isBookmarked ? 'fill-secondary text-secondary' : ''} />
                  {t('bookmark')}
                </Button>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">{t('share')}:</span>
                  <button
                    onClick={() => handleShare('facebook')}
                    className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
                  >
                    <Facebook size={16} />
                  </button>
                  <button
                    onClick={() => handleShare('twitter')}
                    className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition-colors"
                  >
                    <Twitter size={16} />
                  </button>
                  <button
                    onClick={() => handleShare('linkedin')}
                    className="w-8 h-8 rounded-full bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800 transition-colors"
                  >
                    <Linkedin size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
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
                alt={t(`${slug}.title`)}
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
              <motion.div
                className="prose prose-lg max-w-none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-gray-700 leading-relaxed space-y-6">
                  {/* Introduction */}
                  <p className="text-xl text-gray-900 font-medium">
                    {t(`${slug}.introduction`)}
                  </p>

                  {/* Section 1 */}
                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
                    {t(`${slug}.section1.heading`)}
                  </h2>
                  <p>{t(`${slug}.section1.content`)}</p>

                  {/* Section 2 */}
                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
                    {t(`${slug}.section2.heading`)}
                  </h2>
                  <p>{t(`${slug}.section2.content`)}</p>

                  {/* Key Points */}
                  <div className="bg-blue-50 border-l-4 border-secondary p-6 rounded-r-xl my-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{t('keyTakeaways')}</h3>
                    <ul className="space-y-2 list-none pl-0">
                      <li className="flex items-start gap-2">
                        <span className="text-secondary mt-1">✓</span>
                        <span>{t(`${slug}.keyPoint1`)}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary mt-1">✓</span>
                        <span>{t(`${slug}.keyPoint2`)}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary mt-1">✓</span>
                        <span>{t(`${slug}.keyPoint3`)}</span>
                      </li>
                    </ul>
                  </div>

                  {/* Section 3 */}
                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
                    {t(`${slug}.section3.heading`)}
                  </h2>
                  <p>{t(`${slug}.section3.content`)}</p>

                  {/* Conclusion */}
                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
                    {t('conclusion')}
                  </h2>
                  <p>{t(`${slug}.conclusion`)}</p>
                </div>

                {/* Author Bio */}
                <div className="bg-gray-50 rounded-3xl p-8 mt-16">
                  <div className="flex items-start gap-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden relative shrink-0">
                      <Image
                        src={postData.authorAvatar}
                        alt={postData.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{postData.author}</h3>
                      <p className="text-gray-600">
                        {t('authorBio')}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Container>
        </Section>

        {/* Related Posts */}
        <Section className="bg-gray-50">
          <Container>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('relatedArticles')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {postData.relatedPosts.map((relatedSlug, index) => {
                const relatedData = BLOG_POSTS_DATA[relatedSlug];
                return (
                  <motion.article
                    key={relatedSlug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link href={`/blog/${relatedSlug}`} className="group block">
                      <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
                        <div className="relative h-56">
                          <Image
                            src={relatedData.image}
                            alt={t(`${relatedSlug}.title`)}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                            <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-semibold">
                              {tBlog(`categories.${relatedData.category}`)}
                            </span>
                            <div className="flex items-center gap-1">
                              <Clock size={14} />
                              <span>{relatedData.readTime} {tBlog('minRead')}</span>
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-secondary transition-colors">
                            {t(`${relatedSlug}.title`)}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                );
              })}
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}

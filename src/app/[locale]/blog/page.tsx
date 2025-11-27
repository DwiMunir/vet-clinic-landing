'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from '@/i18n/navigation';
import { Calendar, Clock, User, ArrowRight, Search } from 'lucide-react';

// Mock blog data - akan di-replace dengan real data dari CMS/API
const BLOG_POSTS = [
  {
    id: 1,
    slug: 'cat-nutrition-guide',
    image: 'https://images.unsplash.com/photo-1548681528-6a5c45b66b42?w=800&q=80',
    category: 'nutrition',
    date: '2024-11-15',
    readTime: '5',
    author: 'Dr. Sarah Johnson',
  },
  {
    id: 2,
    slug: 'common-cat-diseases',
    image: 'https://images.unsplash.com/photo-1573865526739-10c1dd7aa8a7?w=800&q=80',
    category: 'health',
    date: '2024-11-10',
    readTime: '7',
    author: 'Dr. Mike Chen',
  },
  {
    id: 3,
    slug: 'grooming-tips',
    image: 'https://images.unsplash.com/photo-1501820488136-72669149e0d4?w=800&q=80',
    category: 'grooming',
    date: '2024-11-05',
    readTime: '4',
    author: 'Jessica Lee',
  },
  {
    id: 4,
    slug: 'cat-behavior-understanding',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&q=80',
    category: 'behavior',
    date: '2024-10-28',
    readTime: '6',
    author: 'Dr. Emily Roberts',
  },
  {
    id: 5,
    slug: 'kitten-care-basics',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&q=80',
    category: 'care',
    date: '2024-10-20',
    readTime: '8',
    author: 'Dr. Sarah Johnson',
  },
  {
    id: 6,
    slug: 'senior-cat-health',
    image: 'https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?w=800&q=80',
    category: 'health',
    date: '2024-10-15',
    readTime: '6',
    author: 'Dr. Mike Chen',
  },
];

const CATEGORIES = ['all', 'health', 'nutrition', 'grooming', 'behavior', 'care'];

export default function BlogPage() {
  const t = useTranslations('blog');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.slug.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <Section className="bg-linear-to-br from-blue-50 via-white to-orange-50 pt-32 pb-16">
          <Container>
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
                {t('hero.title')}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {t('hero.description')}
              </p>

              {/* Search Bar */}
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  type="text"
                  placeholder={t('hero.searchPlaceholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-14 text-base rounded-full"
                />
              </div>
            </motion.div>
          </Container>
        </Section>

        {/* Categories Filter */}
        <Section className="bg-white py-8 border-b">
          <Container>
            <motion.div
              className="flex flex-wrap gap-3 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                    ? 'bg-secondary text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  {t(`categories.${category}`)}
                </button>
              ))}
            </motion.div>
          </Container>
        </Section>

        {/* Blog Grid */}
        <Section className="bg-gray-50">
          <Container>
            {filteredPosts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">{t('noResults')}</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <Link key={post.id} href={`/blog/${post.slug}`}>
                    <motion.article
                      className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow cursor-pointer h-full flex flex-col"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      {/* Image */}
                      <div className="relative min-h-56 max-h-56 overflow-hidden">
                        <Image
                          src={post.image}
                          alt={t(`posts.${post.slug}.title`)}
                          fill
                          className="object-cover transition-transform hover:scale-110 duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-secondary text-white text-xs font-semibold px-3 py-1 rounded-full">
                            {t(`categories.${post.category}`)}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-1 flex flex-col">
                        {/* Meta */}
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={14} />
                            <span>{post.readTime} {t('minRead')}</span>
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                          {t(`posts.${post.slug}.title`)}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {t(`posts.${post.slug}.excerpt`)}
                        </p>

                        {/* Author & CTA */}
                        <div className="flex flex-col items-end justify-end pt-4 border-t flex-1">
                          <div className="flex justify-between items-center w-full">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <User size={16} />
                              <span>{post.author}</span>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-secondary hover:text-secondary/80 group"
                            >
                              {t('readMore')}
                              <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  </Link>
                ))}
              </div>
            )}

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
        <Section className="bg-linear-to-r from-blue-600 to-secondary text-white">
          <Container>
            <motion.div
              className="max-w-2xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('newsletter.title')}
              </h2>
              <p className="text-white/90 mb-8">
                {t('newsletter.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder={t('newsletter.placeholder')}
                  className="flex-1 bg-white text-gray-900 border-0 h-12 rounded-full"
                />
                <Button size="lg" className="bg-white text-secondary hover:bg-white/90 rounded-full shrink-0">
                  {t('newsletter.submit')}
                </Button>
              </div>
            </motion.div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}

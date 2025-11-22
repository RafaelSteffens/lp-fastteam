'use client';

import { Button } from '@/app/_components/ui/button';
import { Facebook, Twitter, Linkedin, Share2 } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
  slug: string;
}

export default function ShareButtons({ title, slug }: ShareButtonsProps) {
  const url = typeof window !== 'undefined' ? `${window.location.origin}/blog/noticia/${slug}` : '';

  const handleShare = (platform: 'facebook' | 'twitter' | 'linkedin') => {
    if (!url) return;

    let shareUrl = '';

    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
    }

    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <Share2 className="h-5 w-5 mr-2 text-fastteam-primary" />
        Compartilhe este artigo
      </h3>
      <div className="flex gap-4">
        <Button
          variant="outline"
          size="icon"
          className="hover:text-[#1877F2] hover:border-[#1877F2]"
          onClick={() => handleShare('facebook')}
        >
          <Facebook className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="hover:text-[#1DA1F2] hover:border-[#1DA1F2]"
          onClick={() => handleShare('twitter')}
        >
          <Twitter className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="hover:text-[#0A66C2] hover:border-[#0A66C2]"
          onClick={() => handleShare('linkedin')}
        >
          <Linkedin className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}

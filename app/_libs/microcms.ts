import { createClient } from 'microcms-js-sdk';
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSDate,
  MicroCMSContentId,
} from 'microcms-js-sdk';
import { notFound } from 'next/navigation';

// カテゴリーの型定義
export type Category = {
  name: string;
} & MicroCMSContentId &
  MicroCMSDate;

// ニュースの型定義
export type News = {
  title: string;
  description: string;
  content: string;
  thumbnail?: MicroCMSImage;
  category: Category;
};

// メンバーの型定義
export type Member = {
  name: string;
  position: string;
  profile: string;
  image?: MicroCMSImage;
};

// 事業内容の型定義
export type Business = {
  logo?: MicroCMSImage;
  description: string;
  image?: MicroCMSImage;
  link: string;
};

// メタ情報の型定義
export type Meta = {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: MicroCMSImage;
  canonical?: string;
};

export type Article = News & MicroCMSContentId & MicroCMSDate;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required');
}

// Initialize Client SDK.
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// ニュース一覧を取得
export const getNewsList = async (queries?: MicroCMSQueries) => {
  try {
    const listData = await client.getList<News>({
      endpoint: 'news',
      queries,
    });
    // .catch(notFound);
    return listData;
  } catch (error) {
    console.error('error');
    return null;
  }
};

// ニュースの詳細を取得
export const getNewsDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  try {
    const detailData = await client.getListDetail<News>({
      endpoint: 'news',
      contentId,
      queries,
    });
    // .catch(notFound);
    return detailData;
  } catch (error) {
    console.error('news fetch error');
    return null;
  }
};

// カテゴリーの一覧を取得
export const getCategoryList = async (queries?: MicroCMSQueries) => {
  try {
    const listData = await client.getList<Category>({
      endpoint: 'categories',
      queries,
    });
    // .catch(notFound);

    return listData;
  } catch (error) {
    console.error('category error');
    return null;
  }
};

// カテゴリーの詳細を取得
export const getCategoryDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  try {
    const detailData = await client.getListDetail<Category>({
      endpoint: 'categories',
      contentId,
      queries,
    });
    // .catch(notFound);

    return detailData;
  } catch (error) {
    console.error('category detail error');
    return null;
  }
};

// メンバー一覧を取得
export const getMembersList = async (queries?: MicroCMSQueries) => {
  try {
    const listData = await client.getList<Member>({
      endpoint: 'members',
      queries,
    });
    // .catch(notFound);
    return listData;
  } catch (error) {
    console.error('member list error');
    return null;
  }
};

// 事業内容一覧を取得
export const getBusinessList = async (queries?: MicroCMSQueries) => {
  try {
    const listData = await client.getList<Business>({
      endpoint: 'business',
      queries,
    });
    // .catch(notFound);
    return listData;
  } catch (error) {
    console.error('error');
    return null;
  }
};

// メタ情報を取得
export const getMeta = async (queries?: MicroCMSQueries) => {
  try {
    const data = await client.getObject<Meta>({
      endpoint: 'meta',
      queries,
    });
    // .catch(() => null);

    return data;
  } catch (error) {
    console.error('error');
    return null;
  }
};

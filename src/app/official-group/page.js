import { redirect } from 'next/navigation';

export default function Page() {
  redirect('https://www.hoyolab.com/circles/8/46/feed?page_type=46&page_sort=hot', 'replace');
}
import { useRouter } from 'next/router';

export default function DefaultLayout() {
  const router = useRouter();

  return (
    <div>
      part of
      <div onClick={() => router.push('/')}>
      </div>
    </div>
  );
}

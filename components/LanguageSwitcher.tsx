import React from "react";
import Link from "next/link";
import { useRouter } from "next/Router";
type Props = {};

const LanguageSwitcher = (props: Props) => {
  const router = useRouter();
  const { pathname, asPath, query } = router
  const language = router.locale ?? "fr";

  return (
    <>
      {/* <Link passHref href="/" locale={router.locale === "fr" ? "en" : "fr"}>
        <button type="button">TO FR</button>
      </Link>
      <Link passHref href="/" locale={router.locale === "fr" ? "en" : "fr"}>
        <button type="button">TO EN</button>
      </Link> */}
      <div className="flex flex-row gap-2">

      <button  className={`px-4 py-2 ${router.locale === "en" ? 'bg-gray-400' : 'bg-red-500'}`} type="button" onClick={() => {router.push({ pathname, query }, asPath, {locale: 'en'})}}>passe en english</button>
      <button className={`px-4 py-2 ${router.locale === "fr" ? 'bg-gray-400' : 'bg-blue-500'}`} type="button" onClick={() => {router.push({ pathname, query }, asPath, {locale: 'fr'})}}>passe en français</button>
      </div>
    </>
  );
};

export default LanguageSwitcher;

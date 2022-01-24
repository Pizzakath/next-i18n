import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/Router";
import Link from "next/link";
import LanguageSwitcher from "../components/LanguageSwitcher";

const Home: NextPage = () => {
  const router = useRouter();
  const { t } = useTranslation("common");
  return (
    <div className="min-h-screen bg-teal-700">
      <div className="text-center text-4xl text-gray-200">{t("hw")}</div>
      <p>{router.locale === "en" ? "IM ENGLISH" : "JE  FRANCAIS"}</p>
      <LanguageSwitcher />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common", "footer"])),
    },
  };
};

export default Home;

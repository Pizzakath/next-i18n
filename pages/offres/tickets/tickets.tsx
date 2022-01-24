import { GetServerSideProps, NextPage } from 'next';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/Router";
import Link from "next/link";
import LanguageSwitcher from '../../../components/LanguageSwitcher';

const Tickets: NextPage = () => {
    const { t } = useTranslation('common')
    return (
        <>
        <LanguageSwitcher/>
        <div>
            {t('ticket')}
        </div>
        </>
    );
}


export const getServerSideProps:GetServerSideProps = async ({locale}) => {

    return {
        props: {
            ...(await serverSideTranslations(locale as string, ["common", "footer"])),
          },
    }
}

export default Tickets;
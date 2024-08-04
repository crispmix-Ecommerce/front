import { useTranslations } from 'next-intl';
import React from 'react';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <section className="bg-custom-dark text-white p-2 py-4 grid grid-rows-1 lg:grid-cols-5 gap-4 text-sm  ">
      <div className="flex flex-col gap-4">
        <p className="font-semibold">{t('service.title')}</p>
        <div className="flex flex-col">
          <p>{t('service.contactNumber')}</p>
          <p>{t('service.email')}</p>
          <p>{t('service.typeSchedule')}</p>
          <p>{t('service.schedule')}</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-semibold">{t('quickAccess.title')}</p>
        <div className="flex flex-col">
          <p>{t('quickAccess.home')}</p>
          <p>{t('quickAccess.myRequests')}</p>
          <p>{t('quickAccess.products')}</p>
          <p>{t('quickAccess.howToPlaceAnOrder')}</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-semibold">{t('institutional.title')}</p>
        <div className="flex flex-col">
          <p>{t('institutional.aboutUs')}</p>
          <p>{t('institutional.privacyPolicy')}</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-semibold">{t('mostViewed.title')}</p>
        <div className="flex flex-col">
          <p>{t('mostViewed.product1')}</p>
          <p>{t('mostViewed.product2')}</p>
          <p>{t('mostViewed.product3')}</p>
          <p>{t('mostViewed.product4')}</p>
        </div>
      </div>
    </section>
  );
}

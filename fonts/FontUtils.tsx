import localFont from 'next/font/local'

export const FontITC = localFont({
  display: 'swap',
  variable: '--font-itc',
  src: [
    {
      path: './itcavantgardestd-bk.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: './itcavantgardestd-bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './itcavantgardestd-demi.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
});

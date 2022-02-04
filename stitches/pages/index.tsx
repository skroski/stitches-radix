import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { createStitches } from "@stitches/react";
import { violet, slate } from '@radix-ui/colors'

const {css} = createStitches({
  theme: {
    colors: {
      ...slate,
      ...violet,
    },
    space: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '32px',
      5: '48px',
      6: '64px',
      7: '128px'

    },
    radii: {
      round: '9999px'
    },
    fontSizes: {
      1: '12px',
      2: '16px',
    }
  }
})

const body = css({ padding: 40 });

const button = css({
  appearance: "none",
  border: "none",
  
  borderRadius: "$round",
  cursor: "pointer",

  variants: {
    size: {
      1:{
        height: '$4',
        fontSize: '$1',
      },
      2: {
        height: '$7',
        fontSize: '$2',
      },
    },
    variant: {
      gray: {
        backgroundColor: '$slate3',
        "&:hover": {
          backgroundColor: '$slate11',
          color: "$white",
        },
      },
      purple: {
        backgroundColor: '$violet3',
        "&:hover": {
          backgroundColor: '$violet11',
          color: "$white",
        },
      },
    },
    outlined: {
      true: {
        border: "2px solid $darkPurple",
        backgroundColor: "$white",
        color: "$basePurple",
      },
    },
  },
  compoundVariants: [
    {
      variant: 'gray',
      outlined: true,
      css: {
        borderColor: '$slate7',
      }
    },
    {
      variant: 'purple',
      outlined: true,
      css: {
        borderColor: '$violet7',
        color: '$violet7',
        "&:hover": {
          color: "$white",
        },
      }
    }
  ],
  defaultVariants: {
    variant: "gray",
  },
});

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Stitches e Radix Demo</title>
        <meta name="description" content="Demonstração com Stitches e Radix" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem Vindos ao Teste com Stitches e Radix com <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <button className={button()}>Botão Gray</button>
        <button className={button({ variant: "purple" })}>Botão Purple</button>
        <button className={button({ outlined: true })}>Botão OutLined</button>
        <button className={button({ variant: "purple", outlined: true })}>
          Botão Purple e Outlined
        </button>
        <hr />
        <button className={button({
          size: {
            '@initial': '1',
            '@media (min-width: 500px)': '2',
          }
        })}>Botão Responsivo</button>
      </main>
    </div>
  );
};

export default Home;

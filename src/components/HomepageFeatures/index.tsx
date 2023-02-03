import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'For 42 studs',
    Svg: require('@site/static/img/student.svg').default,
    description: (
      <>
        The main purpose of the site is to share resources that will be useful to current and future students of School 42.
      </>
    ),
  },
  {
    title: 'Collaborative',
    Svg: require('@site/static/img/collaborative.svg').default,
    description: (
      <>
        This site is designed to evolve over time with the experience of the 42 students. Their projects and experiences will be highlighted.
      </>
    ),
  },
  {
    title: 'Open source',
    Svg: require('@site/static/img/opensource.svg').default,
    description: (
      <>
        The entire site is on Github. All documents, pdf's, images and other material can be found on it. If you want to contribute, you have to be a 42 student.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

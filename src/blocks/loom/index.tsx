import * as React from 'react';
import {BlockProps} from '../..';
import {rule} from 'p4-css';

const blockClass = rule({
  d: 'block',
  ov: 'hidden',
  w: '100%',
  bd: '1px solid #E5E9F2',
  bdrad: '6px',
  '& iframe': {
    d: 'block',
    ov: 'hidden',
    bd: 0,
    w: '100%',
    h: '360px',
    bdrad: '8px',
  },
});

const Loom: React.SFC<BlockProps> = ({url, renderWrap}) => {
  return renderWrap(
    <div className={blockClass}>
      <iframe src={`https://www.loom.com/embed/${url}`} webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" />
    </div>,
  );
};

export default Loom;

import React, { useRef, useCallback } from "react";
import ReactDOMServer from 'react-dom/server';
import { ThemeProvider, BaseStyles, IconButton, Heading, Text, Box, Link } from "@primer/react";
import { toPng } from 'html-to-image'
import styled from "styled-components";
import Icons from "./index";

import "./IconsGallery.css";

const SpanStyle = styled.span`
  span {
    margin-right: 25px;
  },
`;

const BorderStyle = styled.span`
  svg {
    border-color: black;
    border: 1px dashed;
  }
`;

const IconLine = (props: { name: string }) => {
  const { name } = props;
  const refSvg = useRef<any>(null);
  const refPngDayColoredStyled = useRef<any>(null);
  const refPngNightColredStyled = useRef<any>(null);
  const refPngDayStyled = useRef<any>(null);
  const refPngNightStyled = useRef<any>(null);
  const downloadPNG = useCallback((e: React.MouseEvent<HTMLElement>, ref: React.MutableRefObject<any>, type: string) => {
    e.preventDefault();
    if (ref.current === null) {
      return
    }
    toPng(ref.current, { cacheBust: true, })
      .then((dataUrl: string) => {
        const link = document.createElement('a')
        link.download = `${name}_${type}.png`
        link.href = dataUrl
        link.click()
      })
      .catch((err: Error) => {
        console.log(err)
      })
  }, [refPngDayColoredStyled, refPngNightColredStyled]);
  const downloadSVG = useCallback((e: React.MouseEvent<HTMLElement>, ref: React.MutableRefObject<any>) => {
    e.preventDefault();
    const link = document.createElement('a')
    link.download = `${name}.svg`
    const svg = ref.current.children[0].children[0];
    link.href = `data:image/svg+xml;utf8,${ReactDOMServer.renderToStaticMarkup(svg)}`;
    link.click()
  }, [refSvg]);
/*
  const downloadJPG = useCallback(() => {
    if (ref.current === null) {
      return
    }
    toJpeg(ref.current, { cacheBust: true, })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = `${name}.jpg`
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [ref]);
*/
  // @ts-expect-error ts-migrate(7053)
  const IconComponent = Icons[name];
  const StyledIcon = () => <IconComponent className="inline-block select-none align-text-bottom overflow-visible" />;
  const ColoredStyledIcon = () => <IconComponent colored className="inline-block select-none align-text-bottom overflow-visible" />;
  const icon = <Box alignItems="center" justifyContent="space-between">
    <BorderStyle>
      <SpanStyle>
        <span>
          <IconComponent colored size="large" className="inline-block select-none align-text-bottom overflow-visible" ref={refSvg} onClick={(e: React.MouseEvent<HTMLElement>) => downloadSVG(e, refSvg)}/>
        </span>
      </SpanStyle>
    </BorderStyle>
    <BorderStyle>
      <SpanStyle>
        <span>
          <IconComponent size="large" className="inline-block select-none align-text-bottom overflow-visible" />
        </span>
      </SpanStyle>
    </BorderStyle>
    <ThemeProvider colorMode="day">
      <IconButton aria-labelledby="" size="medium" sx={{marginRight: "15px"}} icon={ColoredStyledIcon} ref={refPngDayColoredStyled} onClick={(e: React.MouseEvent<HTMLElement>) => downloadPNG(e, refPngDayColoredStyled, "day_colored")}/>
    </ThemeProvider>
    <ThemeProvider colorMode="night">
      <IconButton aria-labelledby="" size="medium" sx={{marginRight: "15px"}} icon={ColoredStyledIcon} ref={refPngNightColredStyled} onClick={(e: React.MouseEvent<HTMLElement>) => downloadPNG(e, refPngNightColredStyled, "night_colored")}/>
    </ThemeProvider>
    <ThemeProvider colorMode="day">
      <IconButton aria-labelledby="" size="medium" sx={{marginRight: "15px"}} icon={StyledIcon} ref={refPngDayStyled} onClick={(e: React.MouseEvent<HTMLElement>) => downloadPNG(e, refPngDayStyled, "day")}/>
    </ThemeProvider>
    <ThemeProvider colorMode="night">
      <IconButton aria-labelledby="" size="medium" sx={{marginRight: "15px"}} icon={StyledIcon} ref={refPngNightStyled} onClick={(e: React.MouseEvent<HTMLElement>) => downloadPNG(e, refPngNightStyled, "night")}/>
    </ThemeProvider>
    <BorderStyle>
      <SpanStyle>
        <span>
          {ColoredStyledIcon()}
        </span>
      </SpanStyle>
      <SpanStyle>
        <span style={{backgroundColor: "lightgrey"}}>
          {ColoredStyledIcon()}
        </span>
      </SpanStyle>
      <SpanStyle>
        <span>
          {StyledIcon()}
        </span>
      </SpanStyle>
      <SpanStyle>
        <span style={{backgroundColor: "lightgrey"}}>
          {StyledIcon()}
        </span>
      </SpanStyle>
    </BorderStyle>
    <SpanStyle>
      <span>
        {name}
      </span>
    </SpanStyle>
    <Box m={3}></Box>
  </Box>
  return icon;
}

const IconsGallery = () => {
  const names = Object.keys(Icons);
  names.map(name => {
      if (name === "default" || name === "Icon") return null;
      // @ts-expect-error ts-migrate(7053)
      const Component = Icons[name];
      return <Component key={name} size={64} />;
  });
  const icons = []
  for (const name of names) {
    if (name === "default") {
      continue;
    }
    const icon = <IconLine name={name}  key={name}/>
    icons.push(icon)
  }
  return (
    <>
      {icons}
    </>
  )
}

const IconsDemo = () => {
  return (
    <BaseStyles>
      <ThemeProvider dayScheme="light" nightScheme="dark_dimmed">
        <Heading sx={{fontSize: 5, mb: 2}}>Ξ 🎉 Datalayer Icons Gallery</Heading>
        <Box mb={3}>
          <Text>Sources available under MIT license in the <Link href="https://github.com/datalayer/icons" target="_blank">GitHub datalayer/icons repository</Link>.</Text>
        </Box>
        <Box mb={3}>
          <Text>Click on a button to download an icon in SVG or PNG format ({Object.keys(Icons).length} icons available).</Text>
        </Box>
        <IconsGallery/>
      </ThemeProvider>
    </BaseStyles>
  )
}

export default IconsDemo;

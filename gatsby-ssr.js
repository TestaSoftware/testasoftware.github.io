import React from "react"

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents}) => {
    setHeadComponents([
        <link key="googlefonts" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />,
        <link key="nucleoicons" href="/assets/css/nucleo-icons.css" rel="stylesheet" />,
        <link key="nucleosvg" href="/assets/css/nucleo-svg.css" rel="stylesheet" />,
        <script key="fontawesome" src="https://kit.fontawesome.com/42d5adcbca.js" crossOrigin="anonymous"></script>,
        <link key="pagestyle" id="pagestyle" href="/assets/css/soft-design-system-pro.css?v=1.0.8" rel="stylesheet" />
    ])

    setPostBodyComponents([
        <script key="popper" src="/assets/js/core/popper.min.js" type="text/javascript"></script>,
        <script key="bootstrap" src="/assets/js/core/bootstrap.min.js" type="text/javascript"></script>,
        <script key="perfectscrollbar" src="/assets/js/plugins/perfect-scrollbar.min.js"></script>,
        <script key="typedjs" src="/assets/js/plugins/typedjs.js"></script>,
        <script key="countup" src="/assets/js/plugins/countup.min.js"></script>,
        <script key="rellax" src="/assets/js/plugins/rellax.min.js"></script>,
        <script key="tilt" src="/assets/js/plugins/tilt.min.js"></script>,
        <script key="choices" src="/assets/js/plugins/choices.min.js"></script>,
        <script key="parallax" src="/assets/js/plugins/parallax.min.js"></script>,
        <script key="nouslider" src="/assets/js/plugins/nouislider.min.js" type="text/javascript"></script>,
        <script key="glide" src="/assets/js/plugins/glidejs.min.js" type="text/javascript"></script>,
        <script key="anime" src="/assets/js/plugins/anime.min.js" type="text/javascript"></script>,
        <script key="chart" src="/assets/js/plugins/chartjs.min.js"></script>,
        <script key="googlemaps" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDTTfWur0PDbZWPr7Pmq8K3jiDp0_xUziI"></script>,
        <script key="softdesign" src="/assets/js/soft-design-system-pro.min.js?v=1.0.8" type="text/javascript"></script>
    ])
}
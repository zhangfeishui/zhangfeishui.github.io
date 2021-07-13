import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import Topics from "../topic"
import "../../components/layout.css"
import "../animate/sakura.css"
import SVGA from "svgaplayerweb"
import lottie from 'lottie-web';

window.onload = function () {
    // const svgUrl = 'https://feishui-1259694017.cos.ap-nanjing.myqcloud.com/google.svga'
    // var player = new SVGA.Player('#demoCanvas');
    // var parser = new SVGA.Parser('#demoCanvas'); // Must Provide same selector eg:#demoCanvas IF support IE6+
    // parser.load(svgUrl, function (videoItem) {
    //     player.setVideoItem(videoItem);
    //     player.startAnimation();
    // })

    lottie.loadAnimation({
        container: document.getElementById('lottie'), // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://assets9.lottiefiles.com/private_files/lf30_AUR7gR.json'
    })
    // lottie.loadAnimation({
    //     container: document.getElementById('lottie2'), // the dom element that will contain the animation
    //     renderer: 'svg',
    //     loop: true,
    //     autoplay: true,
    //     path: 'https://feishui-1259694017.cos.ap-nanjing.myqcloud.com/googlenew.json'
    // })
    lottie.setSpeed(1)
}


class Animate extends React.Component {
    render() {
        return (
            <div class="main">

                <div id="trycar" >
                    <svg width="1680" height="900" viewBox="0 0 1680 900" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <image id="car" x="0" y="48" width="429" height="228" href="https://feishui-1259694017.cos.ap-nanjing.myqcloud.com/ETC/car.png">
                            <animateTransform
                                href="#car"
                                attributeName="transform"
                                attributeType="XML"
                                type="translate"
                                from="1140 0" to="0 660"
                                calcMode="linear"
                                keyTimes="0;0.4;0.56;0.86;1"
                                values="1140 0;1140 0;550 332;550 332;0 660"
                                begin="0s"
                                dur="10s"
                                repeatCount="indefinite">
                            </animateTransform>
                            <animate attributeName="opacity" keyTimes="0;0.4;0.48;0.92;1" values="0;0;1;1;0.2" begin="0s" dur="10s" repeatCount="indefinite" />
                        </image>

                        <image id="light" x="266" y="216" width="161" height="102" href="https://feishui-1259694017.cos.ap-nanjing.myqcloud.com/ETC/etclight.png">
                            <animate attributeName="opacity" keyTimes="0;0.6;0.62;0.92;0.95;1" values="0;0;1;1;0;0" begin="0s" dur="10s" repeatCount="indefinite" />
                        </image>

                        <image id="screen" x="265" y="102" width="161" height="195" href="https://feishui-1259694017.cos.ap-nanjing.myqcloud.com/ETC/screen.png">
                            <animateTransform
                                href="#screen"
                                attributeName="transform"
                                attributeType="XML"
                                type="translate"
                                from="1140 0" to="0 660"
                                calcMode="linear"
                                keyTimes="0;0.61;0.66;1"
                                values="0 6;0 6;0 0;0 0"
                                begin="0s"
                                dur="10s"
                                repeatCount="indefinite">
                            </animateTransform>
                            <animate attributeName="opacity" keyTimes="0;0.61;0.71;0.92;0.95;1" values="0;0;1;1;0;0" begin="0s" dur="10s" repeatCount="indefinite" />
                        </image>

                        <image id="info1" x="344" y="186" width="54" height="55" href="https://feishui-1259694017.cos.ap-nanjing.myqcloud.com/ETC/info1.png">
                            <animate attributeName="opacity" keyTimes="0;0.66;0.7;0.89;0.93;1" values="0;0;1;1;0;0" begin="0s" dur="10s" repeatCount="indefinite" />
                        </image>
                        <image id="info2" x="342" y="221" width="54" height="55" href="https://feishui-1259694017.cos.ap-nanjing.myqcloud.com/ETC/info1.png">
                            <animate attributeName="opacity" keyTimes="0;0.67;0.71;0.89;0.93;1" values="0;0;1;1;0;0" begin="0s" dur="10s" repeatCount="indefinite" />
                        </image>

                        <image id="text1" x="264" y="123" width="76" height="101" href="https://feishui-1259694017.cos.ap-nanjing.myqcloud.com/ETC/%E6%98%BE%E7%A4%BA31.svg">
                            <animate attributeName="opacity" keyTimes="0;0.68;0.72;0.89;0.93;1" values="0;0;1;1;0;0" begin="0s" dur="10s" repeatCount="indefinite" />
                        </image>
                        <image id="text2" x="255" y="129" width="76" height="101" href="https://feishui-1259694017.cos.ap-nanjing.myqcloud.com/ETC/%E6%98%BE%E7%A4%BA31.svg">
                            <animate attributeName="opacity" keyTimes="0;0.69;0.73;0.89;0.93;1" values="0;0;1;1;0;0" begin="0s" dur="10s" repeatCount="indefinite" />
                        </image>
                        <image id="text3" x="243" y="129" width="85" height="104" href="https://feishui-1259694017.cos.ap-nanjing.myqcloud.com/ETC/%E6%98%BE%E7%A4%BA3%20(1).png">
                            <animate attributeName="opacity" keyTimes="0;0.7;0.74;0.89;0.93;1" values="0;0;1;1;0;0" begin="0s" dur="10s" repeatCount="indefinite" />
                        </image>

                        <defs>
                            <mask id="mask2" >
                                <rect x="428" y="410" width="400" height="400" fill="#ffffff" />
                            </mask>
                        </defs>
                        <g mask="url(#mask2)">
                            <image id="langan" x="428" y="462" width="227" height="145" href="https://feishui-1259694017.cos.ap-nanjing.myqcloud.com/ETC/%E6%94%BE%E4%B8%8B%20(1).png" >
                                <animateTransform
                                    href="#langan"
                                    attributeName="transform"
                                    attributeType="XML"
                                    type="translate"
                                    from="1140 0" to="0 660"
                                    calcMode="linear"
                                    keyTimes="0;0.76;0.8;0.96;1"
                                    values="0 0;0 0;-150 -86;-150 -86;0 0"
                                    begin="0s"
                                    dur="10s"
                                    repeatCount="indefinite">
                                </animateTransform>
                            </image>
                        </g>
                    </svg>
                </div >

                <div id="loading">
                    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="120px" height="120px" viewBox="0 0 480 480" space="preserve">
                        <g clip-path="url(#clip0)">
                            {/* <circle cx="240" cy="240" r="180" fill="#1FC7DE" fill-opacity="0.1" /> */}
                            <circle cx="240" cy="240" r="16" fill="#1FC7DE" />
                            {/* 圈子3遮罩 */}
                            <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="16" y="16" width="426" height="439">
                                <path d="M207.5 16L241 240L16 204L24 440L442 454.5L432 31.5L207.5 16Z" fill="#C4C4C4" >
                                    <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 240 240" to="360 240 240" dur="1.2s" repeatCount="indefinite"></animateTransform>
                                </path>
                            </mask>
                            {/* 圈子3 */}
                            <g mask="url(#mask0)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M240 388C321.738 388 388 321.738 388 240C388 158.262 321.738 92 240 92C158.262 92 92 158.262 92 240C92 321.738 158.262 388 240 388ZM240 400C328.366 400 400 328.366 400 240C400 151.634 328.366 80 240 80C151.634 80 80 151.634 80 240C80 328.366 151.634 400 240 400Z" fill="#1FC7DE" >
                                </path>
                            </g>

                            <mask id="mask1" mask-type="alpha" maskUnits="userSpaceOnUse" x="75" y="69" width="165" height="373">
                                <path d="M75 69H240V442H75V69Z" fill="url(#paint0_linear)" >

                                </path>
                            </mask>
                            <g mask="url(#mask1)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M243.625 110.048C245.879 110.112 248.142 110.235 250.414 110.418C252.686 110.6 254.94 110.84 257.175 111.137L254.548 130.963C252.653 130.712 250.741 130.509 248.812 130.354C246.883 130.199 244.962 130.094 243.052 130.039L243.625 110.048ZM223.247 111.059C227.714 110.483 232.243 110.136 236.821 110.029L237.288 130.024C233.412 130.114 229.581 130.408 225.806 130.895L223.247 111.059ZM263.895 112.205C268.397 113.042 272.813 114.108 277.13 115.39L271.436 134.562C267.787 133.478 264.052 132.577 260.241 131.869L263.895 112.205ZM203.271 115.263C207.603 113.986 212.023 112.931 216.518 112.108L220.118 131.781C216.32 132.477 212.585 133.369 208.924 134.447L203.271 115.263ZM283.605 117.5C287.911 119.03 292.106 120.778 296.179 122.729L287.534 140.765C284.093 139.115 280.548 137.638 276.909 136.346L283.605 117.5ZM184.211 122.557C188.296 120.613 192.494 118.876 196.791 117.359L203.447 136.219C199.814 137.501 196.264 138.97 192.808 140.615L184.211 122.557ZM302.24 125.834C306.24 128.017 310.107 130.402 313.829 132.974L302.458 149.427C299.309 147.251 296.039 145.234 292.658 143.389L302.24 125.834ZM166.538 132.742C170.274 130.18 174.148 127.809 178.144 125.643L187.675 143.226C184.293 145.06 181.013 147.066 177.849 149.236L166.538 132.742ZM319.325 136.989C322.924 139.766 326.369 142.724 329.648 145.85L315.848 160.326C313.072 157.679 310.155 155.175 307.108 152.825L319.325 136.989ZM150.671 145.551C153.968 142.435 157.426 139.491 161.029 136.734L173.183 152.617C170.131 154.953 167.202 157.446 164.41 160.086L150.671 145.551ZM334.449 150.671C337.566 153.968 340.509 157.426 343.266 161.029L327.383 173.183C325.047 170.131 322.554 167.202 319.914 164.41L334.449 150.671ZM136.989 160.676C139.766 157.076 142.724 153.631 145.85 150.352L160.326 164.152C157.679 166.929 155.175 169.846 152.825 172.892L136.989 160.676ZM347.259 166.538C349.821 170.274 352.191 174.148 354.357 178.144L336.774 187.675C334.941 184.293 332.934 181.013 330.764 177.849L347.259 166.538ZM125.834 177.76C128.017 173.76 130.402 169.893 132.974 166.172L149.427 177.542C147.251 180.691 145.234 183.961 143.389 187.342L125.834 177.76ZM357.443 184.211C359.387 188.296 361.124 192.494 362.641 196.791L343.781 203.447C342.499 199.814 341.03 196.264 339.385 192.808L357.443 184.211ZM117.5 196.395C119.03 192.089 120.778 187.894 122.729 183.822L140.765 192.466C139.115 195.907 137.638 199.453 136.346 203.091L117.5 196.395ZM364.737 203.271C366.014 207.603 367.069 212.023 367.892 216.518L348.219 220.118C347.524 216.32 346.632 212.585 345.553 208.924L364.737 203.271ZM112.205 216.105C113.042 211.603 114.108 207.188 115.39 202.871L134.562 208.564C133.478 212.213 132.577 215.948 131.869 219.759L112.205 216.105ZM368.941 223.247C369.517 227.714 369.864 232.243 369.971 236.821L349.976 237.288C349.886 233.412 349.592 229.581 349.105 225.806L368.941 223.247ZM110.418 229.586C110.6 227.314 110.841 225.06 111.137 222.825L130.963 225.452C130.712 227.347 130.509 229.259 130.354 231.188C130.199 233.117 130.094 235.038 130.039 236.948L110.048 236.375C110.112 234.121 110.235 231.858 110.418 229.586ZM369.952 243.625C369.888 245.879 369.765 248.142 369.582 250.414C369.4 252.686 369.16 254.94 368.863 257.175L349.037 254.548C349.288 252.653 349.492 250.741 349.647 248.812C349.802 246.883 349.906 244.962 349.961 243.052L369.952 243.625ZM111.059 256.753C110.483 252.286 110.136 247.757 110.029 243.179L130.024 242.713C130.114 246.588 130.408 250.419 130.895 254.194L111.059 256.753ZM367.795 263.895C366.958 268.397 365.893 272.813 364.611 277.13L345.438 271.436C346.522 267.787 347.423 264.052 348.132 260.241L367.795 263.895ZM115.263 276.729C113.986 272.397 112.931 267.977 112.108 263.482L131.782 259.882C132.477 263.68 133.369 267.415 134.447 271.076L115.263 276.729ZM362.5 283.605C360.971 287.911 359.223 292.106 357.271 296.178L339.235 287.534C340.885 284.093 342.362 280.548 343.655 276.909L362.5 283.605ZM122.557 295.789C120.613 291.704 118.876 287.506 117.359 283.209L136.219 276.553C137.501 280.186 138.97 283.736 140.615 287.192L122.557 295.789ZM354.166 302.24C351.983 306.24 349.598 310.107 347.026 313.829L330.573 302.458C332.749 299.309 334.766 296.039 336.611 292.658L354.166 302.24ZM132.742 313.462C130.18 309.726 127.809 305.852 125.643 301.856L143.226 292.325C145.06 295.708 147.066 298.987 149.236 302.151L132.742 313.462ZM343.011 319.325C340.235 322.924 337.276 326.369 334.15 329.648L319.674 315.848C322.321 313.072 324.826 310.155 327.176 307.108L343.011 319.325ZM145.551 329.329C142.435 326.032 139.491 322.574 136.734 318.971L152.617 306.817C154.953 309.869 157.446 312.798 160.086 315.591L145.551 329.329ZM329.329 334.449C326.032 337.566 322.574 340.509 318.971 343.266L306.817 327.383C309.869 325.047 312.798 322.554 315.591 319.914L329.329 334.449ZM160.676 343.011C157.076 340.235 153.631 337.276 150.352 334.15L164.152 319.674C166.929 322.321 169.846 324.826 172.892 327.175L160.676 343.011ZM313.462 347.259C309.726 349.82 305.852 352.191 301.856 354.357L292.325 336.774C295.708 334.941 298.987 332.934 302.151 330.764L313.462 347.259ZM177.76 354.166C173.76 351.983 169.893 349.598 166.172 347.026L177.542 330.573C180.691 332.749 183.961 334.766 187.342 336.611L177.76 354.166ZM295.789 357.443C291.704 359.387 287.506 361.124 283.209 362.641L276.553 343.781C280.186 342.499 283.736 341.03 287.192 339.385L295.789 357.443ZM196.395 362.5C192.089 360.971 187.894 359.223 183.822 357.271L192.466 339.235C195.908 340.885 199.453 342.362 203.091 343.655L196.395 362.5ZM276.729 364.737C272.397 366.014 267.977 367.069 263.482 367.892L259.882 348.219C263.68 347.524 267.415 346.632 271.076 345.553L276.729 364.737ZM216.105 367.795C211.603 366.958 207.188 365.893 202.871 364.611L208.564 345.438C212.213 346.522 215.948 347.423 219.759 348.132L216.105 367.795ZM256.753 368.941C252.286 369.517 247.757 369.864 243.179 369.971L242.713 349.976C246.588 349.886 250.419 349.592 254.194 349.105L256.753 368.941ZM229.586 369.582C227.315 369.4 225.06 369.16 222.825 368.863L225.452 349.037C227.347 349.288 229.259 349.492 231.188 349.647C233.117 349.802 235.038 349.906 236.948 349.961L236.375 369.952C234.121 369.888 231.858 369.765 229.586 369.582Z" fill="#1FC7DE" >
                                </path>
                                <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 240 240" to="360 240 240" dur="1.2s" repeatCount="indefinite"></animateTransform>
                            </g>

                            {/* 扇形 */}
                            <mask id="mask22" mask-type="alpha" maskUnits="userSpaceOnUse" x="-3" y="7" width="486" height="466">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M483 7L421 33L240 240L-2.99998 270L-3 473L59 447L240 240L483 210V7Z" fill="#C4C4C4" >
                                    <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="360 240 240" to="0 240 240" dur="1.1s" repeatCount="indefinite"></animateTransform>
                                </path>
                            </mask>
                            <g mask="url(#mask22)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M240 400C328.366 400 400 328.366 400 240C400 151.634 328.366 80 240 80C151.634 80 80 151.634 80 240C80 328.366 151.634 400 240 400ZM240 272C257.673 272 272 257.673 272 240C272 222.327 257.673 208 240 208C222.327 208 208 222.327 208 240C208 257.673 222.327 272 240 272Z" fill="#1FC7DE" fill-opacity="0.5" >
                                </path>
                            </g>
                            {/* 内外圈之间 */}
                            <mask id="mask3" mask-type="alpha" maskUnits="userSpaceOnUse" x="75" y="96" width="330" height="288">
                                <path d="M230 96H405V120L240 240L230 96Z" fill="#C4C4C4" >
                                    <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="360 240 240" to="0 240 240" dur="2.4s" repeatCount="indefinite"></animateTransform>
                                </path>
                                <path d="M75 195.5L240 240L405 384H75L75 195.5Z" fill="#C4C4C4" >
                                    <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="360 240 240" to="0 240 240" dur="2.4s" repeatCount="indefinite"></animateTransform>
                                </path>

                            </mask>
                            <g mask="url(#mask3)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M240 320C284.183 320 320 284.183 320 240C320 195.817 284.183 160 240 160C195.817 160 160 195.817 160 240C160 284.183 195.817 320 240 320ZM240 300C273.137 300 300 273.137 300 240C300 206.863 273.137 180 240 180C206.863 180 180 206.863 180 240C180 273.137 206.863 300 240 300Z" fill="#1FC7DE" >
                                </path>
                            </g>
                            {/* 外圈 */}
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M240 316C281.974 316 316 281.974 316 240C316 198.026 281.974 164 240 164C198.026 164 164 198.026 164 240C164 281.974 198.026 316 240 316ZM240 320C284.183 320 320 284.183 320 240C320 195.817 284.183 160 240 160C195.817 160 160 195.817 160 240C160 284.183 195.817 320 240 320Z" fill="#1FC7DE" >
                            </path>

                            {/* 内圈 */}
                            <mask id="mask4" mask-type="alpha" maskUnits="userSpaceOnUse" x="132" y="101" width="239" height="255">
                                <path d="M240.5 239.5L349.5 161L167 101L132.5 355.5H370.5L240.5 239.5Z" fill="#C4C4C4" >
                                    <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="360 240 240" to="0 240 240" dur="2.4s" repeatCount="indefinite"></animateTransform>
                                </path>
                            </mask>
                            <g mask="url(#mask4)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M240 296C270.928 296 296 270.928 296 240C296 209.072 270.928 184 240 184C209.072 184 184 209.072 184 240C184 270.928 209.072 296 240 296ZM240 300C273.137 300 300 273.137 300 240C300 206.863 273.137 180 240 180C206.863 180 180 206.863 180 240C180 273.137 206.863 300 240 300Z" fill="#1FC7DE" >
                                </path>
                            </g>
                            {/* 圈一 */}
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M240 44C131.752 44 44 131.752 44 240C44 306.51 77.1238 365.283 127.793 400.724L123.207 407.28C70.4902 370.406 36 309.231 36 240C36 127.334 127.334 36 240 36V44Z" fill="#1FC7DE" >
                                <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="360 240 240" to="0 240 240" dur="1.2s" repeatCount="indefinite"></animateTransform>
                            </path>
                            {/* 圈2 */}
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M240 60C175.648 60 119.181 93.7686 87.3557 144.562L83.9661 142.438C116.492 90.5265 174.213 56 240 56C341.62 56 424 138.38 424 240C424 341.62 341.62 424 240 424V420C339.411 420 420 339.411 420 240C420 140.589 339.411 60 240 60Z" fill="#1FC7DE"
                            > <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 240 240" to="360 240 240" dur="0，7s" repeatCount="indefinite"></animateTransform>
                            </path>
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear" x1="157.5" y1="69" x2="157.5" y2="442" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#C4C4C4" />
                                <stop offset="0.645833" stop-color="#C4C4C4" stop-opacity="0" />
                            </linearGradient>
                            <clipPath id="clip0">
                                <rect width="480" height="480" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>


                <svg width="222" height="222" viewBox="0 0 222 222" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="111" cy="111" r="111" fill="#F2F4F6" />
                    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="222" height="222">
                        <circle cx="111" cy="111" r="111" fill="#F2F4F6" />
                    </mask>
                    <g mask="url(#mask0)">
                        <g>
                            <path d="M-928 126C-969.5 126 -972.5 158.5 -1018 158.5V222.5H-361V158.5C-400.5 158.5 -416 122.5 -463.5 122.5C-511 122.5 -520.5 145.5 -567 145.5C-598.5 145.5 -590.088 102.5 -617 102.5C-643 102.5 -660 158.5 -708 158.5C-738.5 158.5 -750 126 -779 126C-808 126 -818.5 153.5 -847.5 153.5C-876.5 153.5 -886.5 126 -928 126Z" fill="#2196F3" />
                            <path d="M-271 126.5C-312.5 126.5 -315.5 159 -361 159V223H296V159C256.5 159 241 123 193.5 123C146 123 136.5 146 90 146C58.5 146 66.9119 103 40 103C14 103 -3 159 -51 159C-81.5 159 -93 126.5 -122 126.5C-151 126.5 -161.5 154 -190.5 154C-219.5 154 -229.5 126.5 -271 126.5Z" fill="#2196F3" />
                            <animateTransform attributeName="transform" type="translate"
                                from="0 0"
                                to="657 0"
                                begin="0s"
                                dur="2s"
                                repeatCount="indefinite" />
                        </g>
                    </g>
                </svg>

                <div class="lottiesvga">
                    <div id="webp" >
                        <img src="https://feishui-1259694017.cos.ap-nanjing.myqcloud.com/100.webp" style={{ width: "100%" }}></img>
                    </div>
                    <div style={{ height: 334 }} id="lottie" data-animation-path="animate/" data-anim-loop="true" data-name="ninja"  ></div>
                    {/* <div id="demoCanvas" >
                        <div loops="0" clearsAfterStop="true"></div>
                    </div> */}
                </div>

                <video muted="muted" data-autoplay="" loop="loop" autoplay="autoplay" src="//s3.pstatp.com/aweme/resource/web/static/image/index/tvc-v3_0b9db49.mp4" class="video-tvc" id="video-tvc" data-object-fit="">抱歉，您的浏览器不支持内嵌视频</video>

                <div className="BX_AEComposition" AELayerName="sakura">
                    <div className="BX_Class33 BX_BG33 BX_Ani33" id="BX_Layer33" AELayerName="33.远景.png"></div>
                    <div className="BX_Class32 BX_BG32 BX_Ani32" id="BX_Layer32" AELayerName="32.待到樱花烂漫时.png"></div>
                    <div className="BX_Class31 BX_BG31 BX_Ani31" id="BX_Layer31" AELayerName="31.樱花上左1.png"></div>
                    <div className="BX_Class30 BX_BG30 BX_Ani30" id="BX_Layer30" AELayerName="30.樱花上左2.png"></div>
                    <div className="BX_Class29 BX_BG29 BX_Ani29" id="BX_Layer29" AELayerName="29.樱花中左1.png"></div>
                    <div className="BX_Class28 BX_BG28 BX_Ani28" id="BX_Layer28" AELayerName="28.樱花下左1.png"></div>
                    <div className="BX_Class27 BX_BG27 BX_Ani27" id="BX_Layer27" AELayerName="27.樱花下左2.png"></div>
                    <div className="BX_Class26 BX_BG26 BX_Ani26" id="BX_Layer26" AELayerName="26.树干左.png"></div>
                    <div className="BX_Class25 BX_BG25 BX_Ani25" id="BX_Layer25" AELayerName="25.樱花上右1.png"></div>
                    <div className="BX_Class24 BX_BG24 BX_Ani24" id="BX_Layer24" AELayerName="24.樱花上右2.png"></div>
                    <div className="BX_Class23 BX_BG23 BX_Ani23" id="BX_Layer23" AELayerName="23.樱花中右1.png"></div>
                    <div className="BX_Class22 BX_BG22 BX_Ani22" id="BX_Layer22" AELayerName="22.樱花中右2.png"></div>
                    <div className="BX_Class21 BX_BG21 BX_Ani21" id="BX_Layer21" AELayerName="21.樱花下右1.png"></div>
                    <div className="BX_Class20 BX_BG20 BX_Ani20" id="BX_Layer20" AELayerName="20.樱花下右2.png"></div>
                    <div className="BX_Class19 BX_BG19 BX_Ani19" id="BX_Layer19" AELayerName="19.树干右.png"></div>
                    <div className="BX_Class18 BX_BG18 BX_Ani18" id="BX_Layer18" AELayerName="18.浅色花瓣.png"></div>
                    <div className="BX_Class17 BX_BG17 BX_Ani17" id="BX_Layer17" AELayerName="17.左手.png"></div>
                    <div className="BX_Class16 BX_BG16 BX_Ani16" id="BX_Layer16" AELayerName="16.右手下.png"></div>
                    <div className="BX_Class15 BX_Ani15" id="BX_Layer15" AELayerName="15.衣服下">
                        <div className="BX_Sprite15"></div>
                    </div>
                    <div className="BX_Class14 BX_BG14 BX_Ani14" id="BX_Layer14" AELayerName="14.腿.png"></div>
                    <div className="BX_Class13 BX_Ani13" id="BX_Layer13" AELayerName="13.衣服上">
                        <div className="BX_Sprite13"></div>
                    </div>
                    {/* <div class="BX_Class12 BX_BG12 BX_Ani12" id="BX_Layer12" AELayerName="12.衣服上.png"></div> */}
                    <div className="BX_Class11 BX_Ani11" id="BX_Layer11" AELayerName="11.头发">
                        <div class="BX_Sprite11"></div>
                    </div>
                    <div className="BX_Class10 BX_Ani10" id="BX_Layer10" AELayerName="10.帽檐">
                        <div className="BX_Sprite10"></div>
                    </div>
                    <div className="BX_Class9 BX_BG9 BX_Ani9" id="BX_Layer9" AELayerName="9.帽子.png"></div>
                    <div className="BX_Class8 BX_BG8 BX_Ani8" id="BX_Layer8" AELayerName="8.右手上.png"></div>
                    <div className="BX_Class7 BX_BG7 BX_Ani7" id="BX_Layer7" AELayerName="7.桥.png"></div>
                    <div className="BX_Class6 BX_BG6 BX_Ani6" id="BX_Layer6" AELayerName="6.樱花底右.png"></div>
                    <div className="BX_Class5 BX_BG5 BX_Ani5" id="BX_Layer5" AELayerName="5.樱花底左.png"></div>
                    <div className="BX_Class4 BX_BG4 BX_Ani4" id="BX_Layer4" AELayerName="4.浅色花瓣.png"></div>
                    <div className="BX_Class3 BX_BG3 BX_Ani3" id="BX_Layer3" AELayerName="3.深色花瓣.png"></div>
                    <div className="BX_Class2 BX_BG2 BX_Ani2" id="BX_Layer2" AELayerName="2.浅色花瓣.png"></div>
                    <div className="BX_Class1 BX_BG1 BX_Ani1" id="BX_Layer1" AELayerName="1.浅色花瓣.png"></div>
                </div>
            </div >
        );
    }
}

export default Animate



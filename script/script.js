import {footer} from './footer.js'
import {header} from './header.js'
import {barToggle} from './barToggle.js'
import {scrollpage} from './scrollpage.js'
import {modalScript} from './modalScript.js'
import {tenderSlider} from './tenderSlider.js'
import {ecologicSlider} from './ecologic.js'
import {tabAbout} from './tabAbout.js'
import {mediaSlick} from './mediaSlick.js'

import {CertificatToggle} from './CertificatToggle.js'
CertificatToggle()
mediaSlick()

tenderSlider()
ecologicSlider()
modalScript()
tabAbout()
header()
footer()

barToggle()
scrollpage()


let subDrop = document.querySelectorAll('.subDrop');
subDrop.forEach((item) => {
    item.addEventListener('click', () => {
        let tabLinkSub = item.nextElementSibling; // Find the corresponding tab-link-sub
        if (tabLinkSub.style.display === 'block') {
            tabLinkSub.style.display = 'none';
        } else {
            tabLinkSub.style.display = 'block';
        }
    });
});




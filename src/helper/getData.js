import config from '../config';

export default getData = () => {  
    const { translations, locales } = config;
    const data = [];
    
    // loop through locales
    for (let l = 0; l < locales.length; l++) {
        const locale = locales[l];
        // loop through screenshots
        for (var number = 1; number < 6; number++) {
            data.push({
                locale,
                number,
                screenshotText: translations.filter(t => t.key === 'screenshot_'+number+'_text')[0][locale],
                screenshotImg: translations.filter(t => t.key === 'screenshot_'+number+'_img')[0][locale]
            });
        }
    }
    
    return data;
}


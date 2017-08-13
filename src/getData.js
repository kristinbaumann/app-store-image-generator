import config from './config';

export default getData = () => {  
    const data = [];
    const { translations, envs, locales } = config;

    for (var i = 0; i < envs.length; i++) {
        let env = envs[i];
        // loop through locales
        for (let l = 0; l < locales.length; l++) {
            const localeText = locales[l];
            const localeKey = translations.filter(t => t.key === env+'_key')[0][localeText];
            const imageKey = translations.filter(t => t.key === env+'_image_key')[0][localeText];

            // loop through screenshots
            for (var number = 1; number < 6; number++) {
                const screenshotText = translations.filter(t => t.key === env+'_screenshot_'+number+'_text')[0][localeText];
                const screenshotImg = translations.filter(t => t.key === env+'_screenshot_'+number+'_img')[0][localeText];
                
                let element = {
                    localeText,
                    localeKey,
                    imageKey,
                    screenshotText,
                    screenshotImg,
                    number,
                    env
                }
                data.push(element);
            }
        }
    }
    return data;
}


export default `<script>
var config = {
    appId: 'INTERCOM_APP_ID',
    bypassUrls: ['/add-list-of-urls-intercom-must-load-on'],
    facadeContainerClass: 'companyname-intercom-facade',
    intercomLogo: 'INTERCOM_SVG_LOGO',
    facadeColor: 'pink',
    siteIsSPA: true,
};

var companynameIntercomInit=function(){window.intercomSettings={app_id:config.appId};var t=window,e=t.Intercom;if("function"==typeof e)e("reattach_activator"),e("update",t.intercomSettings);else{var n,i,c=document,r=function(){r.c(arguments)};r.q=[],r.c=function(t){r.q.push(t)},t.Intercom=r,(n=c.createElement("script")).type="text/javascript",n.async=!0,n.src="https://widget.intercom.io/widget/"+config.appId,(i=c.getElementsByTagName("script")[0]).parentNode.insertBefore(n,i)}};

var companynameInitIntercomRemoveFacade = function () {
    companynameIntercomInit();
    if (document.querySelector('.' + config.facadeContainerClass)) {
        document.querySelector('.' + config.facadeContainerClass).remove();
    }
}

var companynameIntercomFacade = function () {
    //Facade button
    var buttonFacade = document.createElement('button');
    buttonFacade.type = 'button';
    buttonFacade.className = config.facadeContainerClass;
    buttonFacade.setAttribute('onclick', 'companynameInitIntercomRemoveFacade();setInterval(Intercom(\'show\'), 500);');
    buttonFacade.setAttribute('style', 'position: fixed;z-index: 83002;padding: 0 !important;margin: 0 !important;border: none;bottom: 20px;right: 20px;max-width: 47px;width: 47px;max-height: 47px;height: 47px;border-radius: 50%;background: ' + config.facadeColor + ';cursor: pointer;box-shadow: 0 1px 6px 0 rgb(0 0 0 / 6%), 0 2px 32px 0 rgb(0 0 0 / 16%);transition: transform 167ms cubic-bezier(0.33, 0.00, 0.00, 1.00);box-sizing: content-box;');
    document.body.appendChild(buttonFacade);

    //Facade div for alignment purposes
    var facadeInnerWrapper = document.createElement('div');
    facadeInnerWrapper.className = 'companyname-intercom-facade-inner';
    facadeInnerWrapper.setAttribute('style', 'display: flex;align-items: center;justify-content: center;position: absolute;top: 0;left: 0;width: 48px;height: 48px;transition: transform 100ms linear, opacity 80ms linear;');
    buttonFacade.appendChild(facadeInnerWrapper);

    //Facade Intercom Logo
    var facadeIntercomLogo = document.createElement('img');
    facadeIntercomLogo.src = config.intercomLogo;
    facadeIntercomLogo.setAttribute('style', 'width: 24px !important;height: 24px !important;')
    facadeIntercomLogo.setAttribute('role', 'presentation');
    facadeInnerWrapper.appendChild(facadeIntercomLogo);

    //Facade button hover style
    var facadeHoverStyle = document.createElement('style');
    facadeHoverStyle.textContent = '.' + config.facadeContainerClass + ':hover { transition: transform 250ms cubic-bezier(0.33, 0.00, 0.00, 1.00);transform: scale(1.1); }';
    buttonFacade.appendChild(facadeHoverStyle);
}

// Bypass array has urls which will be checked on intial page load and route change
config.bypassUrls.length > 0 && config.bypassUrls.map(function (url) {
    if (typeof window.intercomSettings === 'undefined' && window.location.pathname === url) {
        if (document.querySelector('.' + config.facadeContainerClass)) {
            return companynameInitIntercomRemoveFacade();
        } else {
            return companynameIntercomInit();
        }
        // No urls matched in bypass array so facade will load    
    }
    if (document.querySelector('.' + config.facadeContainerClass) === null && typeof window.intercomSettings === 'undefined') {
        return companynameIntercomFacade();
    }
});

// Bypass is empty so facade will load no matter what
if (config.bypassUrls.length === 0 && document.querySelector('.' + config.facadeContainerClass) === null && typeof window.intercomSettings === 'undefined') {
    companynameIntercomFacade();
}
</script>`;
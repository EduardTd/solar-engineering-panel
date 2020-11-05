export const toggleBodyClass = (className: string) => {
    const bodyClass = document.body.classList;

    if (bodyClass.contains(className)) {
        bodyClass.remove(className);

        return;
    }

    bodyClass.add(className);
};

export const removeBodyClass = (className: string) => {
    const bodyClass = document.body.classList;

    bodyClass.remove(className);
};

export const getOffsetTopByElement = (selector: string) => {
    const defaultOffset = 0;
    const element = <HTMLElement>document.querySelector(selector);

    if (!element) {
        return defaultOffset;
    }

    const elementPosition = element.offsetTop + element.offsetHeight;

    if (elementPosition > window.pageYOffset) {
        return elementPosition - window.pageYOffset;
    }

    return defaultOffset;
};

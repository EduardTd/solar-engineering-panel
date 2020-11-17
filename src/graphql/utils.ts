export function callQueryOnMount(queryCallback: () => void) {
    return () => {
        let isMounted = true;

        if (isMounted) {
            queryCallback();
        }

        return () => {
            isMounted = false;
        };
    };
}

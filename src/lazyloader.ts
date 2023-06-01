export default function lazyLoader({
    componentFactory,
    loading,
    loadingData,
}) {
    let resolveComponent;

    return () => {
        component: new Promise((resolve) => {
            resolveComponent = resolve;
        }),
        loading: {

        }

    }

}
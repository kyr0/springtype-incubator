export const hmrEntrypoint = (module: any) => {
    if (module  && module.hot) {
        module.hot.dispose(() => {});
        module.hot.accept(() => {
            window.location.reload();
        });
    }
};
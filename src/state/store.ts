export let store={
    _state:{
        count:{
            renderCount:0,
            preRenderCount:0,
        },
        maxValue:{
            renderMaxValue:0,
            preRenderMaxValue:0
        },
        startValue:{
            renderStartValue:0,
            preRenderStartValue:0
        },

    },
    getState(){
        return this._state
    }
}
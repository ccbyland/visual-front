export default (canvasRef) => {

    let curWidget = null

    const dragenter = (e) => {
        e.dataTransfer.dropEffect = 'move'
        console.log(12, curWidget)
    }

    // const dragover = (e) => {

    // }

    // const dragleave = (e) => {

    // }

    // const drop = (e) => {

    // }

    const dragstartWidget = (e, widget) => {

        canvasRef.value.addEventListener('dragenter', dragenter)
        // canvasRef.value.addEventListener('dragover', dragover)
        // canvasRef.value.addEventListener('dragleave', dragleave)
        // canvasRef.value.addEventListener('drop', drop)
        curWidget = widget
    }

    const dragendWidget = () => {

        canvasRef.value.removeEventListener('dragenter', dragenter)
        // canvasRef.value.removeEventListener('dragover', dragover)
        // canvasRef.value.removeEventListener('dragleave', dragleave)
        // canvasRef.value.removeEventListener('drop', drop)
        curWidget = null
    }

    return {
        dragstartWidget,
        dragendWidget
    }
}
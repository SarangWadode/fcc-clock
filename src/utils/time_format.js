/**
 * Function to generate a time string in mm:ss format
 * @argument {String} time Time in seconds
 * @returns {String} Time in mm:ss format
 */
export function format_time (time) {
    if(time < 0) throw new Error('Time must be positive')
    let minutes= Math.floor(time / 60)
    let seconds = time % 60;
    return `${minutes < 10 ? '0':''}${minutes}:${seconds < 10 ? '0': ''}${seconds}`
}

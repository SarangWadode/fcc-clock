import { format_time } from "../utils/time_format";

test('Should reject wrong argument', () => {
    expect(() => {
        format_time(-1500);
    }).toThrow()
})

test('Should work for correct input', () => {
    const inputs = [1500, 2500, 4100, 108]
    const outputs = ['25:00', '41:40', '68:20', '01:48']

    inputs.forEach((input, index) => {
        expect(format_time(input)).toBe(outputs[index])
    })
})

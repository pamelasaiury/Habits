const form = document.querySelector('form')
const nlwSetup = new NLWSetup(form)

const data = {
    exercise: ['01-05'],
    run: ['01-01','01-04','01-03'],
    pills: ['01-01','01-02','01-03','01-04','01-05'],
    water: ['01-01','01-02','01-03','01-04','01-05'],
    water: ['01-02','01-04'],
}

nlwSetup.setData(data)
nlwSetup.load()
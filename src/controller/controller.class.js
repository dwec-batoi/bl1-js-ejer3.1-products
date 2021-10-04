const View = require('../view/view.class')
const Store = require('../model/store.class')

class Controller {
    constructor() {
        this.store = new Store(1)
        this.view = new View()
    }

    addProductToStore(formData) {
        // Cambiamos los datos en el modelo

        // Si todo ha ido bien mostramos los datos en
        // la página y si no mostramos el error
    }

    deleteProductFromStore(prodId) {
        // No olvides pedir confirmación y, si el producto
        // tiene unidades pedir una segunda confirmación
    }

    changeProductInStore(formData) {
    }

    changeProductStock(formData) {
    }
}

module.exports = Controller

import React, { useState} from 'react'

const StockCread = () => {
	// Data
	const stockData = [
		{ id: 1, name: 'Tania', username: 'floppydiskette' }
	]

	const initialFormState = { id: null, name: '', username: '' }

	// Setting state
	const [ stock, setStock ] = useState(usersData)
	const [ currentStock, setCurrentStock ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

const addStock = user => {
    stock.id = stocks.length + 1
    setStock([ ...stocks, stock ])
}

const deleteStock = id => {
    setEditing(false)

    setStock(stocks.filter(stock => stock.id !== id))
}

const updateStock = (id, updatedStock) => {
    setEditing(false)

    setStocks(stocks.map(stock => (stock.id === id ? updatedStock : stock)))
}

const editRow = stock => {
    setEditing(true)

    setCurrentStock({ id: stock.id, name: stock.name, stockname: stock.stockname })
}

export default StockCread
import { FlatList, StyleSheet, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import OrderItem from '../components/OrderItem'
import { useGetOrdersQuery } from '../services/shopService'
import { useSelector } from 'react-redux'
import ShopLayout from "../components/ShopLayout"

const OrderScreen = () => {

  const {localId} = useSelector(state => state.auth.value)
  const {data: orders, isSuccess} = useGetOrdersQuery(localId)
  const [ordersFiltered, setOrdersFiltered] = useState()

  useEffect(()=> {
    if (isSuccess) {
      const responseTransformed = Object.values(orders)
      const ordersFiltered = responseTransformed.filter(order => order.user === localId)
      setOrdersFiltered(ordersFiltered)
    }
  }, [orders, isSuccess, localId])

  return (
    <ShopLayout>
    <View>
        <FlatList
            data={ordersFiltered}
            renderItem={({item}) => {
                return (
                    <OrderItem 
                      order={item}
                    />
                )
            }}
        />
    </View>
    </ShopLayout>
  )
}

export default OrderScreen

const styles = StyleSheet.create({})
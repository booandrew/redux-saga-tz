import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components'
import { loadData } from '../../logic/actions';
import { todosAPI } from '../../service/api-service';
import AddItemForm from '../add-item-form';
import Header from '../header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list'
import TodoStatusFilter from '../todo-status-filter';

const Main = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadData())
  }, [])

  const todoData = useSelector(state => state.todos)
  const isFetching = useSelector(state => state.isTodosFetching)
  const [term, setTerm] = useState('')
  const [filter, setfilter] = useState('')
  const doneCount = todoData.filter((el) => el.completed).length
  const todoCount = todoData.length - doneCount

  const searchItem = (items, term) => {

    if (term.length === 0) {
      return items
    }
    return items.filter((item) => {
      return item.title.indexOf(term) > -1
    })

  }

  const filterItems = (items, filter) => {

    switch (filter) {
      case 'Completed':
        return items.filter(e => e.completed)
      case 'Active':
        return items.filter(e => !e.completed)
      default:
        return items
    }
  }

  const visibleItems = filterItems(searchItem(todoData, term), filter)

  const onSearch = (element) => {
    setTerm(element.target.value)
  }

  const onToggleFilter = (filter) => {
    setfilter(filter)
  }

  return (
    <Layout>

      <Container>
        <Header
          todoCount={todoCount}
          doneCount={doneCount} />

        <FilterWrapper>

          <InputWrapper>
            <SearchPanel onSearch={onSearch} value={term} />
          </InputWrapper>

          <TodoStatusFilter onToggleFilter={onToggleFilter} />

        </FilterWrapper>
        {isFetching ?
          <p>Loading...</p>
          : <TodoList todoData={visibleItems} />}


        <AddItemForm />
      </Container>

    </Layout>

  );
}


const Container = styled.div`
  max-width: 400px;
  margin: auto;
`

const InputWrapper = styled.div`
  flex: .97;
`

const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`

const Layout = styled.div`
  padding: 0px 20px;
`

export default Main;
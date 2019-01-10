import Home from './Home'
import Canvas from './Canvas'
import Two from './Two'

const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
    },
    {
        path: '/canvas',
        exact: true,
        component: Canvas,
        // fetchInitialData: (path = '') => fetchPopularRepos(
        //     path.split('/').pop()
        // )
    },
    {
        path: '/two',
        exact: true,
        component: Two,
    }
]

export default routes
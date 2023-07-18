import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { IndexPage } from './pages/IndexPage';
import { PageNotFound } from './pages/PageNotFound';

export function AppRoutes() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <IndexPage />,
			errorElement: <PageNotFound />,
		},
	]);

	return <RouterProvider router={router} />;
}

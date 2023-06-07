import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ROUTES from './routesModel';
import CardsPage from '../cards/pages/CardsPage';
import AboutPage from '../pages/AboutPage';
import ErrorPage from '../pages/ErrorPage';
import Sandbox from '../sandbox/Sandbox';
import SignupPage from '../users/pages/SignupPage';
import CardDetailsPage from '../cards/pages/CardDetailsPage';
import Babel from '../sandbox/components/Babel';
import StringInterpolation from './../sandbox/components/StringInterpolation';
import SandboxComponents from '../sandbox/components/SandboxComponents';
import LifeCycleHooks from '../sandbox/life-cycle-hooks/LifeCycleHooks';
import InitialCycle from '../sandbox/life-cycle-hooks/InitialCycle';
import UseStateCycle from '../sandbox/life-cycle-hooks/UseStateCycle';
import UseEffectAsComponentDidMount from '../sandbox/life-cycle-hooks/UseEffectAsComponentDidMount';
import UseEffectAsComponentDidUpdate from './../sandbox/life-cycle-hooks/UseEffectAsComponentDidUpdate';
import UseEffectAsComponentWillUnmount from './../sandbox/life-cycle-hooks/UseEffectAsComponentWillUnmount';
import UseEffectNoDependencies from '../sandbox/life-cycle-hooks/UseEffectNoDependencies';
import Memoization from '../sandbox/memoization/Memoization';
import UseCallback from '../sandbox/memoization/use-callback/UseCallback';
import UseMemo from './../sandbox/memoization/use-memo/UseMemo';
import CustomHooks from '../sandbox/custom-hooks/CustomHooks';
import CustomCounterHook from '../sandbox/custom-hooks/CustomCounterHook';
import CustomName from '../sandbox/custom-hooks/CustomName';
import A from '../sandbox/context/components/A';
import FormTest from './../sandbox/forms/FormTest';
import Styles from '../sandbox/components/Styles';
import LoginPage from '../users/pages/LoginPage';
import FavCardsPage from '../cards/pages/FavCardsPage';
import MyCardsPage from '../cards/pages/MyCardsPage';

const Router = () => {
	return (
		<Routes>
			<Route path={ROUTES.ROOT} element={<CardsPage />} />
			<Route path={ROUTES.CARDS} element={<CardsPage />} />
			<Route
				path={`${ROUTES.CARD_DETAILS}/:cardId`}
				element={<CardDetailsPage />}
			/>
			<Route path={ROUTES.FAV_CARDS} element={<FavCardsPage />} />
			<Route path={ROUTES.MY_CARDS} element={<MyCardsPage />} />
			<Route path={ROUTES.ABOUT} element={<AboutPage />} />
			<Route path={ROUTES.SIGNUP} element={<SignupPage />} />
			<Route path={ROUTES.LOGIN} element={<LoginPage />} />
			<Route path={ROUTES.SANDBOX} element={<Sandbox />}>
				<Route path="sandbox-components" element={<SandboxComponents />}>
					<Route path="babel" element={<Babel />} />
					<Route
						path="comp-style"
						element={<Styles sx={{ backgroundColor: 'black', color: 'white' }} />}
					/>
					<Route path="string-interpolation" element={<StringInterpolation />} />
				</Route>
				<Route path="lifecycle" element={<LifeCycleHooks />}>
					<Route path="initial" element={<InitialCycle />} />
					<Route path="use-state-cycle" element={<UseStateCycle />} />
					<Route
						path="componentDidMount"
						element={<UseEffectAsComponentDidMount />}
					/>
					<Route
						path="componentDidUpdate"
						element={<UseEffectAsComponentDidUpdate />}
					/>
					<Route
						path="componentWillUnmount"
						element={<UseEffectAsComponentWillUnmount />}
					/>
					<Route path="no-dependencies" element={<UseEffectNoDependencies />} />
				</Route>{' '}
				<Route path="memoization" element={<Memoization />}>
					<Route path="use-callback" element={<UseCallback />} />
					<Route path="use-memo" element={<UseMemo />} />
				</Route>
				<Route path="custom-hooks" element={<CustomHooks />}>
					<Route path="counter" element={<CustomCounterHook />} />
					<Route path="user" element={<CustomName />} />
				</Route>
				<Route path="context" element={<A />} />
				<Route path="forms" element={<FormTest />} />
			</Route>
			<Route path="*" element={<ErrorPage />} />
		</Routes>
	);
};

export default Router;

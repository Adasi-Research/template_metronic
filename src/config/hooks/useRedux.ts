import {useDispatch, useSelector} from 'react-redux';
import type {TypedUseSelectorHook} from 'react-redux';
import type {RootState, AppDispatch} from '../store';
import {useQuery} from "react-query";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppQuery = () => {
    const getValue = () =>
        useQuery('repoData', () =>
            fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
                res.json()
            )
        )

    return {
        getValue
    }

};

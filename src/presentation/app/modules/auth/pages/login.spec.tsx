import React from "react";
import {render} from '@testing-library/react'
import {Login} from "@/presentation/app/modules/auth/pages/LoginTest";
import {BrowserRouter} from "react-router-dom";

describe('Login Component', () => {
    test('if was a component error in initial screen', () => {
        const {queryByTestId} = render(
            <BrowserRouter><Login/></BrowserRouter>)
        const errorWrap = queryByTestId('error-wrap')

        expect(errorWrap).toBeNull()
    });


})

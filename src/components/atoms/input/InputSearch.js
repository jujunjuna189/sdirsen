import { useState } from "react";

const InputSearch = (props) => {
    const [controller, setController] = useState("");

    const onChanged = (event) => {
        setController(event.target.value);
        props.onChange && props.onChange(event.target.value);
    }

    // const onSearched = () => {
    //     props.onSearch && props.onSearch(controller);
    // }

    return (
        <div className="flex gap-2 items-center">
            <div className="rounded-md shadow-md flex bg-white items-center border gap-2 flex-grow pl-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_763_18" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                        <path d="M0 0H24V24H0V0Z" fill="white" />
                    </mask>
                    <g mask="url(#mask0_763_18)">
                        <path d="M21 10C21 10.9193 20.8189 11.8295 20.4672 12.6788C20.1154 13.5281 19.5998 14.2997 18.9497 14.9497C18.2997 15.5998 17.5281 16.1154 16.6788 16.4672C15.8295 16.8189 14.9193 17 14 17C13.0807 17 12.1705 16.8189 11.3212 16.4672C10.4719 16.1154 9.70026 15.5998 9.05025 14.9497C8.40024 14.2997 7.88463 13.5281 7.53284 12.6788C7.18106 11.8295 7 10.9193 7 10C7 9.08075 7.18106 8.1705 7.53284 7.32122C7.88463 6.47194 8.40024 5.70026 9.05025 5.05025C9.70026 4.40024 10.4719 3.88463 11.3212 3.53284C12.1705 3.18106 13.0807 3 14 3C14.9193 3 15.8295 3.18106 16.6788 3.53284C17.5281 3.88463 18.2997 4.40024 18.9497 5.05025C19.5998 5.70026 20.1154 6.47194 20.4672 7.32122C20.8189 8.1705 21 9.08075 21 10Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3 21L9 15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                </svg>
                <input type="text" className="py-3 px-3 text-sm w-full m-0 focus:outline-none rounded-full" placeholder={props.placeholder} value={controller} onChange={(event) => onChanged(event)} />
            </div>
            {/* <div>
                <ButtonRounded title="Cari" styles="bg-black" titleStyle="text-white" onClick={() => onSearched()} />
            </div> */}
        </div>
    );
}

export default InputSearch;
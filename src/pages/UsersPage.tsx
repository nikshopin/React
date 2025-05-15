import UsersComponent from "../components/UsersComponent/UsersComponent.tsx";
import {useSearchParams} from "react-router-dom";

const UsersPage = () => {

    const [query, setQuery] = useSearchParams({page:'1'})
    let pageCurrent: number = + query.get('page')!;
    return (
        <div className="container mx-auto   flex items-center  justify-center flex-col">
            <div className="flex gap-10 justify-center ">
                <div>
                    <button className='px-3 py-1 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed' onClick={()=>{
                        const page= --pageCurrent;
                        setQuery({page:page.toString()})
                    }}>
                        prev
                    </button>

                </div>
                <div>
                    <button className='px-3 py-1 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed' onClick={()=>{
                        const page= ++pageCurrent;
                        setQuery({page:page.toString()})
                    }}>
                        next
                    </button>

                </div>

            </div>
            <div className="border border-gray-300">
                <UsersComponent/>
            </div>
        </div>
    );
};

export default UsersPage;
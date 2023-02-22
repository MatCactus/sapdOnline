import Link from "next/link";
import { useEffect, useState } from "react";

export default function InputList(props: { title: string, placeholder: string[], data: { setValues: (values: string[]) => void, values: string[] }[] }) {
    const [values, setValues] = useState([] as string[]);

    const addValue = () => {
        if (values.length != props.data.length) return;
        props.data.forEach((e, i) => {
            e.setValues([...e.values, values[i]])
        });

        setValues([...values].fill(""));
    };

    const removeValue = (index: number) => {
        props.data.forEach(e => e.setValues(e.values.filter((_, i) => i != index)));
    };

    const editValue = (i: number, str: string) => {
        const newValues = [...values];
        newValues[i] = str;
        setValues(newValues);
    }

    if (props.data.length == 1)
        return (
            <div className="flex flex-col relative">
                <p className="font-semibold">{props.title}</p>

                <div className="flex flex-row items-center gap-4">
                    <div>
                        <input type="text" placeholder={props.placeholder[0]} className="rounded-md pl-2 outline-none text-black" value={values[0]} onChange={e => setValues([e.target.value])} />
                        <i className="fas fa-plus fa-lg absolute top-2 right-0 cursor-pointer hover:text-green-500 transition-colors " onClick={addValue} />
                        {
                            props.data[0].values.length > 0 &&
                            <ul className="flex flex-col gap-1 list-disc ml-5 pt-1">
                                {
                                    props.data[0].values.map((e: string, i: any) => {
                                        return (
                                            <div key={i} className="flex flex-row items-center gap-4">
                                                <li>{e}</li>
                                                <i className="fas fa-trash-can fa-normal cursor-pointer hover:text-red-500 transition-colors" onClick={() => removeValue(i)} />
                                            </div>
                                        )
                                    })
                                }
                            </ul>
                        }
                    </div>
                </div>
            </div>
        );
    return (
        <div className="flex flex-col relative">
            <p className="font-semibold">{props.title}</p>
            <div className="flex flex-row gap-x-2 w-full">
                {
                    props.data.map((e, i) => {
                        return (
                            <input type="text" placeholder={props.placeholder[i]} className="w-full rounded-md pl-2 outline-none text-black" value={values[i]} onChange={e => editValue(i, e.target.value)} />
                        )
                    })
                }
            </div>
            <i className="fas fa-plus fa-lg absolute top-2 right-0 cursor-pointer hover:text-green-500 transition-colors" onClick={addValue} />
            {
                props.data.filter(e => e.values.length > 0).length > 0 &&
                <ul className="flex flex-col list-disc gap-1 ml-5 pt-1">
                    {
                        props.data[1].values.map((e: string, i: number) => {
                            return (
                                <div key={i} className="flex flex-row items-center gap-x-2">
                                    {
                                        <li className="full break-words">
                                            <a target={"_blank"} href={props.data[0].values[i]} className={"hover:text-blue-600"}>{e}</a>
                                        </li>
                                    }
                                    <i className="fas fa-trash-can fa-normal cursor-pointer hover:text-red-500 transition-colors" onClick={() => removeValue(i)} />
                                </div>
                            )
                        })
                    }
                </ul>
            }
        </div>
    );
}

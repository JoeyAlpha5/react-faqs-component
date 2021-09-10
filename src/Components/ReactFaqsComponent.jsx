import React,{useState} from 'react';
import {MdAdd,MdRemove} from 'react-icons/md';
import './ReactFaqsComponent.css';
const FAQS = (props)=>{
    const [expandFAQ,setExpandFAQ] = useState(null);
    return(
        <>
            {props.data.faqs.map((faq,index)=>{
                return(
                    <div className="faq-section">
                        <div className="faq" style={{backgroundColor:props.data.backgroundColor}}>
                            <div className="faq-heading">
                                <span style={{color:props.data.titleColor}}>{faq.question}</span>
                                {expandFAQ===index?
                                    <MdRemove onClick={()=>setExpandFAQ(null)} className="faq-icon" size={30} style={{color:props.data.iconColor}}/>
                                    :
                                    <MdAdd onClick={()=>setExpandFAQ(index)} className="faq-icon" size={30} style={{color:props.data.iconColor}}/>
                                }
                            </div>
                            <div className={expandFAQ === index?"show show-faq-2":"hide"}>
                                <p className={expandFAQ === index?"show-faq-text":"hide-faq-text"} style={{color:props.data.answerColor}}>
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            })

            }
        </>
    )
}

export default FAQS
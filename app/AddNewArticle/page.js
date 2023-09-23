
"use client"
import  { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import "draft-js/dist/Draft.css";
import 'quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import { Box } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../components/Header";
import "../components/StatBox"
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";

export const metadata = {
  title: "مقالات مركز مشهور خبراء العيون ",
  description: ' مركز مشهور خبراء العيون ',
};
const TextEditor = () => {

  const isMobile = useMediaQuery("(max-width: 600px)");
    var modules = {
      toolbar: [
        [{ size: ["small", false, "large", "huge"] }],
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
          { align: [] }
        ],
        [{ "color": ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'custom-color'] }],
      ]
    };
  
    var formats = [
      "header", "height", "bold", "italic",
      "underline", "strike", "blockquote",
      "list", "color", "bullet", "indent",
      "link", "image", "align", "size",
    ];
  
    const handleProcedureContentChange = (content) => {
      console.log("content---->", content);
    };
    const editorStyle = {
      height: "220px", // Set the height
      width: isMobile ? "100%" : "798px", // Set the width to 100% on mobile devices
      margin: "0 auto", // Center the editor horizontally
      marginLeft:"215px"
    };

    return (
  <div>
  <div style={{ display: "grid", justifyContent: "center" , height: "220px",  width: "100px",marginLeft:"230px"}}>
    <ReactQuill
      theme="snow"
      fullWidth
      variant="filled"
      modules={modules}
      formats={formats}   
      placeholder="write your content ...."
      onChange={handleProcedureContentChange}
      style={editorStyle}
    ></ReactQuill>
    
  </div>
</div>
);
}; 

export default function TextEditorForm() {
  
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleFormSubmit = (values) => {
    console.log(values);
    // You can access the HTML content from the editorState like this:
    const htmlContent = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    console.log(htmlContent);
  };

  const initialValues = {
    title: "",
    subtitle: "",
  };

  const checkoutSchema = yup.object().shape({
    title: yup.string().required("required"),
    subtitle: yup.string().required("required"),
  });

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };
      
  return (
    <Box m="20px" ml="180px"  style={{width:"50%",marginTop: "-451px"}} >
     <Header title="Create Article" subtitle="Create A New Article"   />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}

        
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >


<div className="form-group">
          <FormControl fullWidth variant="filled">
          <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Title"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.title}
                name="title"
                error={!!touched.title && !!errors.title}
                helperText={touched.title && errors.title}
                sx={{
                  gridColumn: isNonMobile ? "span 2" : "span 4",
                  marginBottom: "20px",
                  width: isNonMobile ? "550px" : "100%",
                }}
                InputProps={{
                    style: { fontSize: "26px" ,marginBottom:"20px",width:"780px"},
                  }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                // id="name"
                label="subtitle"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.subtitle}
                name="subtitle"
                error={!!touched.subtitle && !!errors.subtitle}
                helperText={touched.subtitle && errors.subtitle}
                sx={{
                  gridColumn: isNonMobile ? "span 2" : "span 4",
                  marginBottom: "20px",
                  width: isNonMobile ? "550px" : "100%",
                }}
                InputProps={{
                    style: { fontSize: "26px",marginBottom:"20px",width:"780px" },
                  }}
              />
              {/* Connect the TextEditor to the description field */}
              <TextEditor
                editorState={editorState}
                onEditorStateChange={onEditorStateChange}
              />
              </FormControl>
               </div>
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
            <Button type="submit" color="secondary" variant="contained" 
            style={{ marginTop: "84px",marginRight:"-120px", width:"200px",color:"white" , height:"45px",fontSize:"15px",
              marginTop: isNonMobile ? "84px" : "20px",
              marginRight: isNonMobile ? "-120px" : "0",
              width: isNonMobile ? "200px" : "100%",
              fontSize: "15px",
              backgroundColor:"#013A63",
            }}  >
               <a href="../TableArticles"> Add New Article</a> 
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
}




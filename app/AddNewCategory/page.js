"use client"
import React, { useState , useEffect} from "react";
import { EditorState, convertToRaw } from "draft-js";
import "draft-js/dist/Draft.css";
import 'quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import { Box} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
export const metadata = {
  title: "فئات مركز مشهور خبراء العيون ",
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
      width: isMobile ? "100%" : "1000px", // Set the width to 100% on mobile devices
      margin: "0 auto", // Center the editor horizontally
    };
    
    return (
  <div>
  <div style={{ display: "grid", justifyContent: "center" , height: "220px",  width: "1000px"}}>
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
    name: "",
    permalink: "",
  };

  const checkoutSchema = yup.object().shape({
    name: yup.string().required("required"),
    permalink: yup.string().required("required"),
  });

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };
    const [setValue]=useState('');

    const handleSelect=(e)=>{
  
      console.log(e);
  
      setValue(e)
  
    }

      const [name, setName] = useState("");
      const [dropdownOptions, setDropdownOptions] = useState(
        JSON.parse(localStorage.getItem("dropdownOptions")) || ["بدون"]
      );
    
      const addToDropdown = () => {
        const trimmedName = name.trim();
    
        if (trimmedName === "") {
          return;
        }
    
        setDropdownOptions([...dropdownOptions, trimmedName]);
        setName("");
    
        // Update the localStorage with the new dropdownOptions
        localStorage.setItem("dropdownOptions", JSON.stringify([...dropdownOptions, trimmedName]));
      };
    
      useEffect(() => {
        // Load the dropdownOptions from localStorage when the component mounts
        const savedDropdownOptions = JSON.parse(localStorage.getItem("dropdownOptions"));
    
        if (savedDropdownOptions) {
          setDropdownOptions(savedDropdownOptions);
        }
      }, []);
    
      
      
  return (
    <Box m="20px" ml="180px"   >
      <Header title="CREATE CATEGORY" subtitle="Create A New Category" />

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
              type="text"
              fullWidth
              variant="filled"
              // required
              value={name}
              label="Name"
              onBlur={handleBlur}
              onChange={(e) => setName(e.target.value)}
              sx={{
                gridColumn: isNonMobile ? "span 2" : "span 4",
                marginBottom: "20px",
                width: isNonMobile ? "550px" : "100%",
              }}
              InputProps={{
                  style: { fontSize: "26px" ,marginBottom:"20px",width:"1000px"},
                }}
              name="name"
              error={!!touched.name && !!errors.name}
              helperText={touched.name && errors.name}
            />
          </FormControl>
          <Button variant="contained" onClick={addToDropdown}>&rarr;</Button>
          <FormControl fullWidth variant="filled">
            <InputLabel htmlFor="dropdown">Dropdown</InputLabel>
            <Select
              id="dropdown"
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{
                gridColumn: isNonMobile ? "span 2" : "span 4",
                marginBottom: "20px",
                marginTop:"10px",
                width: isNonMobile ? "550px" : "100%",
              }}
              InputProps={{
                  style: { fontSize: "26px" ,marginBottom:"20px",width:"1000px"},
                }}
              onSelect={handleSelect}
            >
              {dropdownOptions.map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>


 
             
              <TextField
                fullWidth
                variant="filled"
                type="text"
                // id="name"
                label="Permalink"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.permalink}
                name="permalink"
                error={!!touched.permalink && !!errors.permalink}
                helperText={touched.permalink && errors.permalink}
                sx={{ gridColumn: "span 4" }}
                InputProps={{
                    style: { fontSize: "26px" , width:"1000px" },
                  }}
              />
              {/* Connect the TextEditor to the description field */}
              <TextEditor
                editorState={editorState}
                onEditorStateChange={onEditorStateChange}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
            <Button type="submit" color="secondary" variant="contained" 
            style={{ marginTop: "84px",marginRight:"200px", width:"200px",color:"white" , height:"45px",fontSize:"15px",
              marginTop: isNonMobile ? "84px" : "20px",
              marginRight: isNonMobile ? "200px" : "0",
              width: isNonMobile ? "200px" : "100%",
              fontSize: "15px",
              backgroundColor:"#013A63",
            }}  >
               <a href="../TableCategory"> Add New Category</a> 
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
}




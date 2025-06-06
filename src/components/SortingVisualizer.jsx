import React, { useEffect, useState } from "react";
import Bar from "./Bar";
import { FaExternalLinkAlt } from "react-icons/fa";

function SortingVisualizer() {

  const [val, setVal] = useState([{ bars: [{ arrayValue: "", color: "" }] }]);
  const [NUMBER_OF_ARRAY_BARS, setArraySize] = useState(30); 
  const [arraySpeed, setArraySpeed] = useState(20);
  const [Disabled, setDisabled] = useState(false);

  useEffect(() => {
    componentDidMount();
    // console.log("Service Run");
    return () => {
      // console.log("Service Destroyed");
    };
  }, [NUMBER_OF_ARRAY_BARS]);
  
  function componentDidMount() {
    return resetArray();
  }

  function resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 600));
    }
    
    console.log("resetArray : " + array);
    setVal([{bars:{arrayValue: randomIntFromInterval(5, 600), color: 'bg-blue-500'}}]);
    
    array.map((item, index) => {
      return setVal((prevVal) => {
        return [
          ...prevVal,
          { bars: { arrayValue: item, color: "bg-blue-500" } },
        ];
      });
    });

  }

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const handleClick = () => {
    componentDidMount();
  };

  // function testSortingAlgorithms() {
  //   for (let i = 0; i < 100; i++) {
  //     const array = [];
  //     const length = randomIntFromInterval(1, 1000);
  //     for (let i = 0; i < length; i++) {
  //       array.push(randomIntFromInterval(-1000, 1000));
  //     }
  //     const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
  //     const mergeSortedArray = mergeSort(array, 0, array.length - 1);
  //     console.log(javaScriptSortedArray);
  //     console.log(mergeSortedArray);
  //     console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
  //   }
  // }

  // function arraysAreEqual(arrayOne, arrayTwo) {
  //   if (arrayOne.length !== arrayTwo.length) return false;
  //   for (let i = 0; i < arrayOne.length; i++) {
  //     if (arrayOne[i] !== arrayTwo[i]) {
  //       return false;
  //     }
  //   }
  //   return true;
  // }

  // Testing mergesorted arrays

  //   async function mereefer() {
  //     const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
  //     console.log("Unsorted Array:", unsortedArray);

  //     mergeSort(unsortedArray, 0, unsortedArray.length - 1);
  //     console.log("Sorted Array:", unsortedArray);
  //   }

  //     mereefer();

  

  async function mergeSort(arr, start, end) {
    if (start >= end) {
      return;
    }

    const mid = Math.floor((start + end) / 2);

    await new Promise((resolve, reject) => {
      setVal((prevVal) => {
        const newVal = [...prevVal];
        newVal[mid] = {
          bars: { arrayValue: newVal[mid], color: "bg-pink-500" },
        };
        return newVal;
      });
      return setTimeout(resolve, arraySpeed);
    });

    await mergeSort(arr, start, mid);

    await new Promise((resolve, reject) => {
      setVal((prevVal) => {
        const newVal = [...prevVal];
        newVal.map((x, index) => {
          if (start <= index && index <= mid) {
            newVal[index] = {
              bars: { arrayValue: arr[index], color: "bg-purple-400" },
            };
          }
        });
        return newVal;
      });
      return setTimeout(resolve, arraySpeed);
    });

    await mergeSort(arr, mid + 1, end);

    await new Promise((resolve, reject) => {
      setVal((prevVal) => {
        const newVal = [...prevVal];
        newVal.map((x, index) => {
          if (mid + 1 <= index && index <= end) {
            newVal[index] = {
              bars: { arrayValue: arr[index], color: "bg-orange-400" },
            };
          }
        });
        return newVal;
      });
      return setTimeout(resolve, arraySpeed);
    });

    return await merge(arr, start, mid, end);
  }

  async function merge(array, p, q, r) {
    let n1 = q - p + 1;
    let n2 = r - q;

    let leftArray = new Array(n1);
    let rightArray = new Array(n2);

    for (let i = 0; i < n1; ++i) {
      leftArray[i] = array[p + i];
    }
    for (let j = 0; j < n2; ++j) {
      rightArray[j] = array[q + 1 + j];
    }

    let i = 0,
      j = 0,
      k = p;

    while (i < n1 && j < n2) {

      if (leftArray[i] <= rightArray[j]) {
        array[k] = leftArray[i];

        await new Promise((resolve, reject) => {
          setVal((prevVal) => {
            const newVal = [...prevVal];
            newVal[k] = {
              bars: { arrayValue: array[k], color: "bg-red-600" },
            };
            return newVal;
          });
          return setTimeout(resolve, arraySpeed);
        });

        ++i;
      } else {
        array[k] = rightArray[j];

        await new Promise((resolve, reject) => {
          setVal((prevVal) => {
            const newVal = [...prevVal];
            newVal[k] = {
              bars: { arrayValue: array[k], color: "bg-red-600" },
            };
            return newVal;
          });
          return setTimeout(resolve, arraySpeed);
        });

        ++j;
      }
      ++k;
    }

    while (i < n1) {
      array[k] = leftArray[i];

      await new Promise((resolve, reject) => {
        setVal((prevVal) => {
          const newVal = [...prevVal];
          newVal[k] = {
            bars: { arrayValue: array[k], color: "bg-blue-500" },
          };
          return newVal;
        });
        return setTimeout(resolve, arraySpeed);
      });

      ++i;
      ++k;
    }

    while (j < n2) {
      array[k] = rightArray[j];

      await new Promise((resolve, reject) => {
        setVal((prevVal) => {
          const newVal = [...prevVal];
          newVal[k] = {
            bars: { arrayValue: array[k], color: "bg-blue-500" },
          };
          return newVal;
        });
        return setTimeout(resolve, arraySpeed);
      });

      ++j;
      ++k;
    }
  }

  async function merger() {

    setDisabled(!Disabled);

    let arr = giveArrayValue();
    await mergeSort(arr, 0, arr.length - 1);

    await new Promise((resolve, reject) => {
      setVal((prevVal) => {
        const newVal = [...prevVal];
        newVal.map((x, index) => {
          newVal[index] = {
            bars: { arrayValue: arr[index], color: "bg-green-500" },
          };
        });
        return newVal;
      });
      return setTimeout(resolve, arraySpeed);
    });

    setDisabled(false);
  }

  async function quicker() {

    setDisabled(!Disabled);

    let arr = giveArrayValue();
    await quickSort(arr);

    setDisabled(false);
  }

  async function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
      const pivotIndex = await partition(arr, left, right); // Partition the array and get the pivot index

      await new Promise((resolve, reject) => {
        setVal((prevVal) => {
          const newVal = [...prevVal];
          newVal[pivotIndex] = {
            bars: { arrayValue: newVal[pivotIndex], color: "bg-green-500" },
          };
          return newVal;
        });
        return setTimeout(resolve, arraySpeed);
      });

      await quickSort(arr, left, pivotIndex - 1); // Sort the left half

      await new Promise((resolve, reject) => {
        setVal((prevVal) => {
          const newVal = [...prevVal];
          newVal.map((x, index) => {
            if (left - 1 <= index && index <= pivotIndex - 1) {
              newVal[index] = {
                bars: { arrayValue: newVal[index], color: "bg-green-500" },
              };
            }
          });
          return newVal;
        });
        return setTimeout(resolve, arraySpeed);
      });

      await quickSort(arr, pivotIndex + 1, right); // Sort the right half

      await new Promise((resolve, reject) => {
        setVal((prevVal) => {
          const newVal = [...prevVal];
          newVal.map((x, index) => {
            if (pivotIndex + 1 <= index && index <= right) {
              newVal[index] = {
                bars: { arrayValue: newVal[index], color: "bg-green-500" },
              };
            }
          });
          return newVal;
        });
        return setTimeout(resolve, arraySpeed);
      });
    }
    return arr;
  }

  async function partition(arr, left, right) {
    await new Promise((resolve, reject) => {
      setVal((prevVal) => {
        const newVal = [...prevVal];
        newVal[right] = {
          bars: { arrayValue: newVal[right], color: "bg-pink-500" },
        };
        return newVal;
      });
      return setTimeout(resolve, arraySpeed);
    });

    const pivot = arr[right]; // Choose the rightmost element as the pivot

    let i = left - 1; // Pointer for the smaller element

    for (let j = left; j < right; j++) {
      await new Promise((resolve, reject) => {
        setVal((prevVal) => {
          const newVal = [...prevVal];
          newVal[i] = {
            bars: { arrayValue: newVal[i], color: "bg-yellow-500" },
          };
          newVal[j] = {
            bars: { arrayValue: newVal[j], color: "bg-yellow-500" },
          };
          return newVal;
        });
        return setTimeout(resolve, arraySpeed);
      });

      await new Promise((resolve, reject) => {
        setVal((prevVal) => {
          const newVal = [...prevVal];
          newVal[i] = {
            bars: { arrayValue: newVal[i], color: "bg-blue-500" },
          };
          newVal[j] = {
            bars: { arrayValue: newVal[j], color: "bg-blue-500" },
          };
          return newVal;
        });
        return setTimeout(resolve, arraySpeed);
      });

      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements

        await new Promise((resolve, reject) => {
          setVal((prevVal) => {
            const newVal = [...prevVal];
            newVal[i] = {
              bars: { arrayValue: arr[i], color: "bg-blue-500" },
            };
            newVal[j] = {
              bars: { arrayValue: arr[j], color: "bg-blue-500" },
            };
            return newVal;
          });
          return setTimeout(resolve, arraySpeed);
        });
      }
    }

    // Place the pivot in the correct position
    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];

    await new Promise((resolve, reject) => {
      setVal((prevVal) => {
        const newVal = [...prevVal];
        newVal[i + 1] = {
          bars: { arrayValue: arr[i + 1], color: "bg-green-500" },
        };
        newVal[right] = {
          bars: { arrayValue: arr[right], color: "bg-blue-500" },
        };
        return newVal;
      });
      return setTimeout(resolve, arraySpeed);
    });

    return i + 1; // Return the pivot index
  }

  // Testing quicksort 

  // function quququ() {
  //   // Example usage:
  //   const array = [5, 3, 8, 4, 2];
  //   console.log(array); //
  //   const sortedArray = quickSort(array);
  //   console.log(array); // Output: [2, 3, 4, 5, 8]
  // }

  // quququ();

  function giveArrayValue() {
    let arr = [];
    val.map((item, index) => {
      // console.log(item.bars.arrayValue);
      arr.push(item.bars.arrayValue);
    });
    // console.log("giveArrayValue : " + arr);
    return arr;
  }

  async function bubbleSort() {

    setDisabled(!Disabled);
    
    const arr = giveArrayValue();

    const swaps = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        await new Promise((resolve, reject) => {
          setVal((prevVal) => {
            const newVal = [...prevVal];
            newVal[j] = {
              bars: { arrayValue: newVal[j], color: "bg-orange-500" },
            };
            newVal[j + 1] = {
              bars: { arrayValue: newVal[j + 1], color: "bg-orange-500" },
            };
            return newVal;
          });
          return setTimeout(resolve, arraySpeed);
        });

        if (arr[j] > arr[j + 1]) {
          swaps.push([j, j + 1]);
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;

          await new Promise((resolve, reject) => {
            setVal((prevVal) => {
              const newVal = [...prevVal];
              newVal[j] = {
                bars: { arrayValue: arr[j], color: "bg-yellow-500" },
              };
              newVal[j + 1] = {
                bars: { arrayValue: arr[j + 1], color: "bg-yellow-500" },
              };
              return newVal;
            });
            return setTimeout(resolve, arraySpeed);
          });
        }

        await new Promise((resolve, reject) => {
          setVal((prevVal) => {
            const newVal = [...prevVal];
            newVal[j] = { bars: { arrayValue: arr[j], color: "bg-blue-500" } };
            newVal[j + 1] = {
              bars: { arrayValue: arr[j + 1], color: "bg-blue-500" },
            };
            return newVal;
          });
          return setTimeout(resolve, arraySpeed);
        });
      }

      await new Promise((resolve, reject) => {
        setVal((prevVal) => {
          const newVal = [...prevVal];
          newVal[arr.length - 1 - i] = {
            bars: {
              arrayValue: arr[arr.length - 1 - i],
              color: "bg-green-500",
            },
          };
          return newVal;
        });
        return setTimeout(resolve, arraySpeed);
      });
    }

    setDisabled(false);
  }

  async function insertionSort() {

    setDisabled(!Disabled);

    const arr = giveArrayValue();

    for (let i = 1; i < arr.length; i++) {
      let j = i - 1;
      const temp = arr[i];

      await new Promise((resolve, reject) => {
        setVal((prevVal) => {
          const newVal = [...prevVal];
          newVal[i] = {
            bars: { arrayValue: newVal[i], color: "bg-orange-500" },
          };
          newVal[j] = {
            bars: { arrayValue: newVal[j], color: "bg-orange-500" },
          };
          return newVal;
        });
        return setTimeout(resolve, arraySpeed);
      });

      while (j >= 0 && arr[j] > temp) {
        arr[j + 1] = arr[j];

        await new Promise((resolve, reject) => {
          setVal((prevVal) => {
            const newVal = [...prevVal];
            newVal[i] = {
              bars: { arrayValue: newVal[i], color: "bg-blue-500" },
            };
            newVal[j + 1] = {
              bars: { arrayValue: arr[j + 1], color: "bg-blue-500" },
            };
            return newVal;
          });
          return setTimeout(resolve, arraySpeed);
        });

        j--;

        await new Promise((resolve, reject) => {
          setVal((prevVal) => {
            const newVal = [...prevVal];
            newVal[j] = {
              bars: { arrayValue: newVal[j], color: "bg-orange-500" },
            };
            return newVal;
          });
          return setTimeout(resolve, arraySpeed);
        });
      }

      await new Promise((resolve, reject) => {
        setVal((prevVal) => {
          const newVal = [...prevVal];
          newVal[j] = { bars: { arrayValue: newVal[j], color: "bg-blue-500" } };
          return newVal;
        });
        return setTimeout(resolve, arraySpeed);
      });

      arr[j + 1] = temp;

      await new Promise((resolve, reject) => {
        setVal((prevVal) => {
          const newVal = [...prevVal];
          newVal[j + 1] = {
            bars: { arrayValue: arr[j + 1], color: "bg-blue-500" },
          };
          return newVal;
        });
        return setTimeout(resolve, arraySpeed);
      });
    }

    await new Promise((resolve, reject) => {
      setVal((prevVal) => {
        const newVal = [...prevVal];
        newVal.map((x, index) => {
          newVal[index] = {
            bars: { arrayValue: arr[index], color: "bg-green-500" },
          };
        });
        return newVal;
      });
      return setTimeout(resolve, arraySpeed);
    });

    setDisabled(false);

  }

  async function selectionSort() {

    setDisabled(!Disabled);

    const nums = giveArrayValue();

    for (let i = 0; i < nums.length; i++) {
      let mini = nums[i];
      let minIndex = i;

      for (let j = i + 1; j < nums.length; j++) {
        await new Promise((resolve, reject) => {
          setVal((prevVal) => {
            const newVal = [...prevVal];
            newVal[i] = {
              bars: { arrayValue: newVal[i], color: "bg-orange-500" },
            };
            newVal[j] = {
              bars: { arrayValue: newVal[j], color: "bg-orange-500" },
            };
            return newVal;
          });
          return setTimeout(resolve, arraySpeed);
        });

        if (mini > nums[j]) {
          mini = nums[j];
          minIndex = j;

          await new Promise((resolve, reject) => {
            setVal((prevVal) => {
              const newVal = [...prevVal];
              newVal[i] = {
                bars: { arrayValue: newVal[i], color: "bg-blue-500" },
              };
              newVal[minIndex] = {
                bars: { arrayValue: newVal[minIndex], color: "bg-pink-500" },
              };
              return newVal;
            });
            return setTimeout(resolve, arraySpeed);
          });
        }

        await new Promise((resolve, reject) => {
          setVal((prevVal) => {
            const newVal = [...prevVal];
            newVal[i] = {
              bars: { arrayValue: newVal[i], color: "bg-blue-500" },
            };
            newVal[j] = {
              bars: { arrayValue: newVal[j], color: "bg-blue-500" },
            };
            return newVal;
          });
          return setTimeout(resolve, arraySpeed);
        });
      }

      // Swap
      const temp = nums[i];
      nums[i] = nums[minIndex];
      nums[minIndex] = temp;

      if (minIndex === i) {
        await new Promise((resolve, reject) => {
          setVal((prevVal) => {
            const newVal = [...prevVal];
            newVal[i] = {
              bars: { arrayValue: nums[i], color: "bg-green-500" },
            };
            return newVal;
          });
          return setTimeout(resolve, arraySpeed);
        });
      } else {
        await new Promise((resolve, reject) => {
          setVal((prevVal) => {
            const newVal = [...prevVal];
            newVal[i] = {
              bars: { arrayValue: nums[i], color: "bg-green-500" },
            };
            newVal[minIndex] = {
              bars: { arrayValue: nums[minIndex], color: "bg-blue-500" },
            };
            return newVal;
          });
          return setTimeout(resolve, arraySpeed);
        });
      }

    }

    setDisabled(false);
  }

  return (
    <div className="w-screen h-screen bg-black gap-1 flex flex-col p-0.5">
      {/* Header */}
      <div className="w-full h-14 bg-slate-500 flex flex-row gap-2 justify-between items-center px-2 sm:px-6 py-2 sm:py-0">
        <div className="w-full sm:w-400 flex justify-center sm:justify-start">
          <h4 className={`p-2 text-lg sm:text-xl font-semibold px-3 ${Disabled ? 'text-black' : 'text-white'} hover:bg-gradient-to-r from-blue-500 to-purple-400 hover:bg-clip-text hover:text-transparent`}>
            Sorting Visualizer</h4>
          <a href="https://github.com/Satyamsahugr8/sorting-visualizer"><FaExternalLinkAlt className="mt-3"/></a>
        </div>
        {/* Hide controls on mobile */}
        <div className="hidden sm:flex w-full sm:w-auto flex-wrap sm:flex-nowrap justify-center items-center gap-1.5 p-2">
          {/* ...buttons here as before... */}
          <button
            className={`p-2 text-xs px-2 sm:px-4 text-white rounded-full border border-black ${Disabled ? 'hover:text-white' : 'hover:text-black'} ${Disabled ? '' : 'hover:bg-indigo-400'} ${Disabled ? 'bg-gray-400' : 'bg-gray-700'}`}
            onClick={() => handleClick()}
            disabled={Disabled}
          >
            Reset Array
          </button>

          <button
            className={`p-2 text-xs px-2 sm:px-4 text-white rounded-full border border-black ${Disabled ? 'hover:text-white' : 'hover:text-black'} ${Disabled ? '' : 'hover:bg-indigo-400'} ${Disabled ? 'bg-gray-400' : 'bg-gray-700'}`}
            onClick={() => bubbleSort()}
            disabled={Disabled}
          >
            Bubble sort
          </button>
          
          <button
            className={`p-2 text-xs px-2 sm:px-4 text-white rounded-full border border-black ${Disabled ? 'hover:text-white' : 'hover:text-black'} ${Disabled ? '' : 'hover:bg-indigo-400'} ${Disabled ? 'bg-gray-400' : 'bg-gray-700'}`}
            onClick={() => selectionSort()}
            disabled={Disabled}
          >
            Selection sort
          </button>

          <button
            className={`p-2 text-xs px-2 sm:px-4 text-white rounded-full border border-black ${Disabled ? 'hover:text-white' : 'hover:text-black'} ${Disabled ? '' : 'hover:bg-indigo-400'} ${Disabled ? 'bg-gray-400' : 'bg-gray-700'}`}
            onClick={() => insertionSort()}
            disabled={Disabled}
          >
            Insertion sort
          </button>

          <button
            className={`p-2 text-xs px-2 sm:px-4 text-white rounded-full border border-black ${Disabled ? 'hover:text-white' : 'hover:text-black'} ${Disabled ? '' : 'hover:bg-indigo-400'} ${Disabled ? 'bg-gray-400' : 'bg-gray-700'}`}
            onClick={() => merger()}
            disabled={Disabled}
          >
            merge sort
          </button>

          <button
            className={`p-2 text-xs px-2 sm:px-4 text-white rounded-full border border-black ${Disabled ? 'hover:text-white' : 'hover:text-black'} ${Disabled ? '' : 'hover:bg-indigo-400'} ${Disabled ? 'bg-gray-400' : 'bg-gray-700'}`}
            onClick={() => quicker()}
            disabled={Disabled}
          >
            quick sort
          </button>
          
        </div>

        {/* Sliders */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 w-full sm:w-auto mt-2 sm:mt-0">
          
          <p className={`text-white ${Disabled ? 'hover:text-white' : 'hover:text-black'} text-xs lg:text-sm flex`}>
            Speed:
            <input className="input w-14 lg:w-auto ml-2" defaultValue="100" type="range" step="25" min="0" max="100" onChange={(event)=> {
              if (event.target.value === '100') {
                return setArraySpeed(20);
              }
              if (event.target.value === '75') {
                return setArraySpeed(40);
              }
              if (event.target.value === '50') {  
                return setArraySpeed(60);
              }
              if (event.target.value === '25') {
                return setArraySpeed(80);
              } 
              if (event.target.value === '0') {
                return setArraySpeed(100);
              }
            }}
            disabled={Disabled}
            />
          </p>
  
          <p className={`text-white ${Disabled ? 'hover:text-white' : 'hover:text-black'} text-xs lg:text-sm flex`}>
            Size:
            {/* <span className="hidden sm:inline">Select array size:</span> */}
            <input className="input w-14 lg:w-auto ml-2" defaultValue="30" type="range" step="10" min="10" max="80" onChange={(event)=>setArraySize(event.target.value)} 
            disabled={Disabled}
            />
          </p>

        </div>
      </div>
      {/* Mobile controls below nav */}
      <div className="flex sm:hidden flex-wrap justify-center items-center gap-1 p-2 bg-slate-600">
        <button
          className={`p-1 text-[10px] px-2 text-white rounded-full border border-black ${Disabled ? 'hover:text-white' : 'hover:text-black'} ${Disabled ? '' : 'hover:bg-indigo-400'} ${Disabled ? 'bg-gray-400' : 'bg-gray-700'}`}
          onClick={() => handleClick()}
          disabled={Disabled}
        >
          Reset
        </button>
        <button
          className={`p-1 text-[10px] px-2 text-white rounded-full border border-black ${Disabled ? 'hover:text-white' : 'hover:text-black'} ${Disabled ? '' : 'hover:bg-indigo-400'} ${Disabled ? 'bg-gray-400' : 'bg-gray-700'}`}
          onClick={() => bubbleSort()}
          disabled={Disabled}
        >
          Bubble
        </button>
        <button
          className={`p-1 text-[10px] px-2 text-white rounded-full border border-black ${Disabled ? 'hover:text-white' : 'hover:text-black'} ${Disabled ? '' : 'hover:bg-indigo-400'} ${Disabled ? 'bg-gray-400' : 'bg-gray-700'}`}
          onClick={() => merger()}
          disabled={Disabled}
        >
          Merge
        </button>
        <button
          className={`p-1 text-[10px] px-2 text-white rounded-full border border-black ${Disabled ? 'hover:text-white' : 'hover:text-black'} ${Disabled ? '' : 'hover:bg-indigo-400'} ${Disabled ? 'bg-gray-400' : 'bg-gray-700'}`}
          onClick={() => quicker()}
          disabled={Disabled}
        >
          Quick
        </button>
        <button
          className={`p-1 text-[10px] px-2 text-white rounded-full border border-black ${Disabled ? 'hover:text-white' : 'hover:text-black'} ${Disabled ? '' : 'hover:bg-indigo-400'} ${Disabled ? 'bg-gray-400' : 'bg-gray-700'}`}
          onClick={() => selectionSort()}
          disabled={Disabled}
        >
          Select
        </button>
        <button
          className={`p-1 text-[10px] px-2 text-white rounded-full border border-black ${Disabled ? 'hover:text-white' : 'hover:text-black'} ${Disabled ? '' : 'hover:bg-indigo-400'} ${Disabled ? 'bg-gray-400' : 'bg-gray-700'}`}
          onClick={() => insertionSort()}
          disabled={Disabled}
        >
          Insert
        </button>
      </div>
      {/* Bars */}
      <div className="w-full h-4/5 bg-black flex justify-center gap-[0.1px] px-1 sm:px-4 py-2 overflow-x-auto">
        {val && val.length > 0 ? (
          val.map((item, index) => {
            return <Bar key={index} values={item} />;
          })
        ) : (
          <p>No items to display</p>
        )}
      </div>
      {/* Footer */}
      <div className={`group text-xs sm:text-sm flex justify-end p-2 sm:p-3 mt-4 sm:mt-12`}>
        <a href="https://github.com/Satyamsahugr8/" className={`hover:bg-gradient-to-r from-blue-500 to-purple-400 hover:bg-clip-text hover:text-transparent ${Disabled ? 'bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent' : 'text-white'} `}>Made with 🤍 by Satyam Sahu</a>
        {/* <a href="https://github.com/Satyamsahugr8" className={`hidden group-hover:inline text-purple-400`}> Made with 💜 by Satyam Sahu</a> */}
      </div>
    </div>
  );

}

export default SortingVisualizer;

 <div className="calculator">
        <div className="display">
          <span>(0)</span>0
        </div>
        <div className="operators">
          <button>/</button>
          <button>*</button>
          <button>+</button>
          <button>-</button>
          <button>DEL</button>
		  <button>CE</button>
        </div>
        <div className="numbers">
          {createNumbers()}
          <button>0</button>
          <button>.</button>
          <button>=</button>
        </div>
      </div>
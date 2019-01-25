//
//  ViewController.swift
//  JSSDKDevelopmentApp
//
//  Created by Catherine Chen (RD-TW) on 21/01/2019.
//  Copyright © 2019 Catherine Chen. All rights reserved.
//

import UIKit

class ViewController: UIViewController, UISearchBarDelegate, UITableViewDelegate, UITableViewDataSource {

    let FUNCTIONS = ["echo", "ensureAppID", "loadPairingInfo"]
    let diamondBridge = DiamondBridge()
    var functionList:[String] = []
    
    @IBOutlet weak var functionTableView: UITableView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        functionList = FUNCTIONS
        functionTableView.delegate = self
        functionTableView.dataSource = self
        functionTableView.register(UINib(nibName: "FunctionCell", bundle: nil), forCellReuseIdentifier: "functionCell")
        
        //TODO: Load Javascript files
        diamondBridge.injectJS()
    }
    
    //MARK: TableView
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "functionCell", for: indexPath) as! FunctionCell
        cell.functionName.text = functionList[indexPath.row]
        return cell
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return functionList.count
    }
    
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        queryData(text: functionList[indexPath.row])
    }
    
    func queryData(text: String) {
        var response = "quering \(text)..."
        
        switch(text) {
        case FUNCTIONS[0]:
            popUpAlertWithTextField(numbersOfTextfield: 1) { (arguments) in
                response = self.diamondBridge.echo(arguments[0])
                self.popUpResponseAlert(message: response)
            }
            break
        case FUNCTIONS[1]:
            break
        case FUNCTIONS[2]:
            break
        default:
            response = "Function not found"
        }
    }
    
    func popUpAlertWithTextField(numbersOfTextfield: Int, onTextInputed: ((_ arguments: [String]) -> Void)? = nil) {
        let title = numbersOfTextfield > 1 ? "Set Up Arguments" : "Set Up Argument"
        let alert = UIAlertController(title: title, message: nil, preferredStyle: .alert)
        var textFields: [UITextField] = []
        for _ in 0..<numbersOfTextfield {
            textFields.append(UITextField())
        }
        let writeAction = UIAlertAction(title: "Add", style: .default) { (UIAlertAction) in
            var arguments = Array(repeating: "", count: numbersOfTextfield)
            var inputCounts = numbersOfTextfield
            for i in 0..<numbersOfTextfield {
                if let content = textFields[i].text {
                    arguments[i] = content
                    inputCounts -= 1
                }
                textFields.append(UITextField())
            }
            if inputCounts == 0 {
                onTextInputed?(arguments)
            }
        }
        
        alert.addAction(writeAction)
        for i in 0..<numbersOfTextfield {
            alert.addTextField { (alertTextField) in
                alertTextField.placeholder = "Create new argument"
                textFields[i] = alertTextField
            }
        }
        present(alert, animated: true, completion: nil)
    }
    
    func popUpResponseAlert(message: String) {
        let alert = UIAlertController(title: "Response", message: message, preferredStyle: .alert)
        let restartAction = UIAlertAction(title: "OK", style: .default) { (UIAlertAction) in
            self.reloadData()
        }
        alert.addAction(restartAction)
        present(alert, animated: true, completion: nil)
    }
    
    //MARK: SearchVar
    func searchBar(_ searchBar: UISearchBar, textDidChange searchText: String) {
        // Do something as users clear the Search Bar
        if searchBar.text?.count == 0 {
            reloadData()
        } else {
            // Query data as users are typing to improve user experience.
            filter(with: searchBar.text!)
        }
    }
    
//    func searchBarSearchButtonClicked(_ searchBar: UISearchBar) {
//        queryData(text: searchBar.text!)
//    }
    
    func filter(with functionName: String) {
        functionList = []
        FUNCTIONS.forEach { (f) in
            if(f.containsIgnoringCase(functionName)) {
                functionList.append(f)
            }
        }
        functionTableView.reloadData()
    }
    
    func reloadData() {
        functionList = FUNCTIONS
        functionTableView.reloadData()
    }
}

extension String {
    func containsIgnoringCase(_ find: String) -> Bool{
        return self.range(of: find, options: .caseInsensitive) != nil
    }
}

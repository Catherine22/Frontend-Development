//
//  ViewController.swift
//  MyApp
//
//  Created by Catherine Chen (RD-TW) on 10/01/2019.
//  Copyright © 2019 Catherine Chen. All rights reserved.
//

import UIKit
import JavaScriptCore

class ViewController: UIViewController, UISearchBarDelegate {

    @IBOutlet weak var logLabel: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        logLabel.numberOfLines = 0
        logLabel.text = ""
    }
    
//        func searchBarSearchButtonClicked(_ searchBar: UISearchBar) {
//          queryData(text: searchBar.text!)
//        }
    
    func searchBar(_ searchBar: UISearchBar, textDidChange searchText: String) {
        // Do something as users clear the Search Bar
        if searchBar.text?.count == 0 {
            reloadData()
        } else {
            // Query data as users are typing to improve user experience.
            queryData(text: searchBar.text!)
        }
    }
    
    func queryData(text: String) {
        let context: JSContext! = JSContext()
        context.evaluateScript("function echo(input) { return input}")
        let response: JSValue = context.evaluateScript("echo(\"\(text)\")")
        logLabel.text = response.toString()
    }
    
    func reloadData() {
        print("reload data")
        logLabel.text = "Loading..."
        
        let fileURL = Bundle.main.url(forResource:"DiamondBridge", withExtension: "js")
        do {
            let jsCode = try NSString.init(contentsOf: fileURL!, encoding: String.Encoding.utf8.rawValue)
            print("jsCode: \(jsCode)")
        } catch {
            print("Error loading js code: \(error)")
        }
        
        
    }


}


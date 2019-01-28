//
//  Storage.swift
//  JSSDKDevelopmentApp
//
//  Created by Catherine Chen (RD-TW) on 21/01/2019.
//  Copyright © 2019 Catherine Chen. All rights reserved.
//

import UIKit
import CoreData

// Add Realm / UserDefault here
@objc class Storage: NSObject, StorageDelegate {
    let TAG = "Storage"
    
    var DEVICE_UUID = "device_uuid"
    
    func setValue(_ key: String, _ value: String) {
        let context = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext
        let newProfile = ProfileItem(context: context)
        
        if key == DEVICE_UUID {
            if let uuid = UUID(uuidString: value) {
                newProfile.device_uuid = uuid
            } else {
                Logger.shared.e(TAG, "UUID string is not valid");
            }
        }
        
        // MARK: save the context
        do {
            try context.save()
            Logger.shared.d(TAG, "setValue: \(key) -> \(value)")
        } catch {
            if let error = error as NSError? {
                fatalError("Unresolved error \(error), \(error.userInfo)")
            }
        }
    }
    
    func getValueForKey(_ key: String) -> String {
        let context = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext
        let request = NSFetchRequest<NSFetchRequestResult>(entityName: "User")
        request.predicate = NSPredicate(format: "attributeName == %@", key)
        request.returnsObjectsAsFaults = false
        do {
            let result = try context.fetch(request)
            for data in result as! [NSManagedObject] {
                return data.value(forKey: key) as! String
            }
            
        } catch {
            if let error = error as NSError? {
                fatalError("Error fetching data \(error), \(error.userInfo)")
            }
        }
        return "00000000-0000-0000-0000-000000000000"
    }
    
    func test1(key: String) {
        Logger.shared.d(TAG, key)
    }
    
    func test2() -> Bool {
        Logger.shared.d(TAG, "true")
        return true
    }
    
}
